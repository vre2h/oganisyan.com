module.exports = {
  siteMetadata: {
    title: 'Oganisyan Vrezh',
    author: {
      name: 'Oganisyan Vrezh',
      summary:
        'Software Engineer with a keen interest in design, management and education.',
    },
    description: 'A little bit about me.',
    siteUrl: 'https://oganisyan.com/',
    social: {
      twitter: 'vre2h',
      github: 'vre2h',
      telegram: 'vre2h',
    },
    projects: [
      {
        title: 'Simply Technologies',
        site: 'https://simplytechnologies.net',
        period: 'December 2018 - ongoing',
        roles: 'Fullstack Developer',
        stack: 'HTML/CSS, JS, React, Node.js',
      },
      {
        title: 'Armenian Code Academy',
        site: 'https://aca.am',
        period: 'August 2019 - ongoing',
        roles: 'Lecturer',
        stack: 'HTML/CSS, JS, React',
      },
    ],
    traineeships: [
      {
        title: 'Kojoyan Design Studio',
        site: 'https://www.kojoyanstudio.com/',
        period: 'October 2017 – December 2017',
        roles: 'Designer',
        stack: 'Adobe Photoshop, Adobe Illustrator',
      },
      {
        title: 'Armenian Code Academy',
        site: 'https://aca.am',
        period: 'February 2018 – July 2018',
        roles: 'Frontend Trainee',
        stack: 'HTML/CSS, JS, React',
      },
    ],
    education: [
      {
        title: 'Moscow State University',
        site: 'http://msu.am',
        period: 'September 2015 - July 2019',
        roles: 'Bachelor',
        stack: 'Computer Science',
      },
      {
        title: 'Russian-Armenian University',
        site: 'http://rau.am/eng',
        period: 'September 2019 - June 2021',
        roles: 'Master',
        stack: 'Psychology and Human Behaviour',
      },
    ],
    testimonials: [
      {
        author: 'Ilon Mask',
        position: 'CEO at Tesla',
        text: `Pariatur anim tempor id id nostrud voluptate tempor sint pariatur
      proident occaecat ea. Qui ea laboris amet deserunt eu non non
      consequat ipsum cillum id aute quis duis. Eiusmod excepteur irure
      excepteur amet anim labore dolore do esse.`,
      },
      {
        author: 'Tsiala Oganesyan',
        position: 'NERVER UTOX at VREZH',
        text: `Mollit duis voluptate ad consequat pariatur culpa nostrud culpa
        deserunt aliqua reprehenderit officia duis. Qui sint aliqua ipsum
        veniam et officia aliqua sunt. Dolore aliqua excepteur sint qui magna
        officia tempor eiusmod dolore nisi. Exercitation proident consectetur
        cupidatat aute ullamco ea duis id occaecat irure enim aliqua`,
      },
    ],
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
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
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
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Oganisyan Vrezh Blog',
        short_name: 'Oganisyan',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#f9d678',
        display: 'minimal-ui',
        icon: 'content/assets/icon.svg',
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
