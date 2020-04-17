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
      <div>
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

const BookList = ({ books, title }) => (
  <section>
    <h4>{title}</h4>
    {books.map(({ title: bookTitle, author, review }) => (
      <Book title={bookTitle} author={author} review={review} />
    ))}
  </section>
)

export default ({ data, location }) => {
  const { title: siteTitle } = data.site.siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />

      <h1 style={{ margin: `${rhythm(1 / 2)} 0 ${rhythm(2)} 0` }}>Bookshelf</h1>

      <main style={{ marginTop: rhythm(1) }}>
        <BookList
          books={[
            { title: 'War and Peace', author: 'Leo Tolstoy', review: '🔥🔥🔥' },
            {
              title: 'Steve Jobs',
              author: 'Walter Isaacson',
              review: '🔥🔥🔥🔥🔥',
            },
            { title: 'The Jedi Way', author: 'Maxim Dorofeev', review: '🔥' },
          ]}
          title="2020"
        />
        <BookList
          books={[
            { title: 'War and Peace', author: 'Leo Tolstoy', review: '🔥🔥🔥' },
            {
              title: 'Steve Jobs',
              author: 'Walter Isaacson',
              review: '🔥🔥🔥🔥🔥',
            },
            { title: 'The Jedi Way', author: 'Maxim Dorofeev', review: '🔥' },
          ]}
          title="2019"
        />
        <BookList
          books={[
            { title: 'War and Peace', author: 'Leo Tolstoy', review: '🔥🔥🔥' },
            {
              title: 'Steve Jobs',
              author: 'Walter Isaacson',
              review: '🔥🔥🔥🔥🔥',
            },
            { title: 'The Jedi Way', author: 'Maxim Dorofeev', review: '🔥' },
          ]}
          title="2018"
        />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
