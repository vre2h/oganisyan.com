import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Bio from '../components/bio'
import Flex from '../components/Flex'
import { rhythm } from '../utils/typography'
import { Bookmark } from '../components/icons'

const Book = ({ title, author, review }) => (
  <Flex flexDirection="row" style={{ marginBottom: rhythm(1) }}>
    <div style={{ display: 'flex' }}>
      <Bookmark
        width="25"
        style={{
          marginRight: '10px',
          alignSelf: 'flex-start',
          cursor: 'pointer',
          fill: 'var(--main-color)',
        }}
      />
      <div style={{ width: 'calc(100% - 30px)' }}>
        <h4 style={{ margin: 0 }}>
          {title} {review}
        </h4>
        <small style={{ fontStyle: 'italic', color: '#a5a5a5' }}>
          by {author}
        </small>
      </div>
    </div>
  </Flex>
)

const BookList = ({ books, title, reverse }) => {
  const items = reverse ? books.reverse() : books
  return (
    <section>
      <h4>{title}</h4>
      {items.map(({ title: bookTitle, author, review }) => (
        <Book title={bookTitle} author={author} review={review} />
      ))}
    </section>
  )
}

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
          <BookList reverse title={title} books={yearBooks} />
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
          }
        }
      }
    }
  }
`
