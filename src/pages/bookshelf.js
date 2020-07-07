import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Bio from '../components/bio'
import Flex from '../components/Flex'
import { rhythm } from '../utils/typography'
import { Bookmark } from '../components/icons'

const Book = ({ title, author, review, link }) => {
  const rating = new Array(Number(review)).fill(
    <span
      style={{
        position: 'relative',
        top: '-1px',
        marginLeft: '7px',
        color: 'var(--main-color)',
      }}
    >
      ★
    </span>,
  )
  return (
    <Flex flexDirection="row" style={{ marginBottom: rhythm(1) }}>
      <div style={{ display: 'flex', width: '100%' }}>
        <div>
          <Bookmark
            width="25"
            style={{
              marginRight: '10px',
              alignSelf: 'flex-start',
              cursor: 'pointer',
              fill: 'var(--main-color)',
            }}
          />
        </div>
        <div>
          <Flex>
            <h4 style={{ margin: 0, lineHeight: 1.4 }}>
              {title}
              {rating}
            </h4>
          </Flex>
          <Flex flexDirection="column">
            <small style={{ fontStyle: 'italic', color: '#a5a5a5' }}>
              by {author}{' '}
            </small>
            <small>
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Find book here
                </a>
              )}
            </small>
          </Flex>
        </div>
      </div>
    </Flex>
  )
}

const BookList = ({ books, title }) => (
  <section>
    <h4>{title}</h4>
    {books.map(({ title: bookTitle, author, review, link }) => (
      <Book
        key={bookTitle}
        title={bookTitle}
        author={author}
        review={review}
        link={link}
      />
    ))}
  </section>
)

export default ({ data, location }) => {
  const { title: siteTitle } = data.site.siteMetadata
  const { books } = data.site.siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />

      <h1 style={{ margin: `${rhythm(1 / 2)} 0 ${rhythm(2)} 0` }}>Bookshelf</h1>

      <main style={{ marginTop: rhythm(1) }}>
        {books.map(({ title, books: yearBooks }) => (
          <BookList title={title} books={yearBooks} />
        ))}
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        books {
          title
          year
          books {
            author
            title
            review
            link
          }
        }
      }
    }
  }
`
