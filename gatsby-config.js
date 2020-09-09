const jobs = require('./content/projects/jobs.json')
const traineeships = require('./content/projects/traineeships.json')
const education = require('./content/projects/education.json')
const clients = require('./content/reviews/clients.json')
const students = require('./content/reviews/students.json')
const tutors = require('./content/reviews/tutors.json')
const books2020 = require('./content/books/2020.json')
const books2019 = require('./content/books/2019.json')
const books2018 = require('./content/books/2018.json')
const books2017 = require('./content/books/2017.json')

module.exports = {
  siteMetadata: {
    title: 'Oganisyan Vrezh',
    author: {
      name: 'Oganisyan Vrezh',
      summary:
        'Software Engineer and Lecturer with a keen interest in design, management and education.',
    },
    description: 'A little bit about me.',
    siteUrl: 'https://oganisyan.com/',
    social: {
      twitter: '@vre2h',
      github: 'vre2h',
      telegram: '@vre2h',
    },
    projects: jobs.data,
    traineeships: traineeships.data,
    education: education.data,
    testimonials: [...clients.data, ...students.data, ...tutors.data],
    books: [books2020, books2019, books2018, books2017],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/lyrics`,
        name: 'lyrics',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              showCaptions: ['alt'],
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-163435757-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Oganisyan Vrezh Blog',
        short_name: 'Oganisyan',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#f9d678',
        display: 'minimal-ui',
        icon: 'content/assets/icons/icon.svg',
        theme_color_in_head: false,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-no-javascript',
  ],
}
