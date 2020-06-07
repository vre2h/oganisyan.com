import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { get } from 'lodash'

import defaultSeoImage from '../../content/assets/about-photo.jpg'

const SEO = ({ description, lang, meta, title, postImage }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `,
  )

  const image = get(postImage, 'src', defaultSeoImage)
  const imageUrl = `http://oganisyan.com/' + ${image}`

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: imageUrl,
        },

        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.social.twitter,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:image',
          content: imageUrl,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}
/**
<meta name="twitter:image" content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg">

 */

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
}

export default SEO
