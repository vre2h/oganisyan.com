import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Social from '../components/social'
import Flex from '../components/Flex'
import { rhythm } from '../utils/typography'
import aboutPhoto from '../../content/assets/about-photo.jpg'
import { infoIcon } from '../components/icons'

const Activity = ({ activities, title: activityTitle }) => (
  <section className="activity-wrapper">
    <h4 style={{ marginTop: rhythm(1) }}>{activityTitle}</h4>
    {activities.map(({ title, site, period, roles, stack }) => (
      <section style={{ marginBottom: rhythm(1.5) }}>
        <h3 style={{ margin: 0, lineHeight: 1.4 }}>
          <a href={site}>{title}</a>
        </h3>
        <small style={{ color: '#a0a0a0', fontSize: rhythm(0.45) }}>
          {period}
        </small>
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'max-content 1fr',
            gridGap: '5px 10px',
            fontSize: rhythm(1 / 2),
            marginLeft: 10,
            marginTop: 5,
          }}
        >
          <div style={{ fontWeight: 'bold' }}>Roles:</div>
          <div>{roles}</div>
          <div style={{ fontWeight: 'bold' }}>Stack:</div>
          <div>{stack}</div>
        </section>
      </section>
    ))}
  </section>
)
/* eslint-disable react/jsx-props-no-spreading */
export default ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { projects, traineeships, education } = data.site.siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <Flex justifyContent="space-between" alignItems="baseline">
        <h1 style={{ margin: `${rhythm(1 / 2)}`, marginLeft: 0 }}>About me</h1>
        <Social />
      </Flex>
      <main style={{ marginTop: rhythm(1) }}>
        <h3 style={{ marginTop: rhythm(1) }}>Ahoy!</h3>

        <div
          style={{
            marginRight: rhythm(1 / 2),
          }}
        >
          <figure className="about-image">
            <img src={aboutPhoto} alt="" height="300" />
          </figure>
          <p>
            I’m Vrezh, Software Engineer and Lecturer with a keen interest in
            design, management and education.
            <small>
              {infoIcon}
              <a href="https://cutt.ly/oganisyan-cv" style={{ margin: 0 }}>
                cv
              </a>
            </small>
          </p>
          <p>
            As a Software Engineer I am working a lot with Javascript (React,
            Node.js and ecosystem). I have experience with architecturing big
            and scalable applications.
            <small>
              {infoIcon}
              <a href="https://github.com/vre2h" style={{ margin: 0 }}>
                Github
              </a>
            </small>
          </p>
          <p>
            As a Teacher, I have been lecturing and mentoring more than 50
            students during different courses and internship programs and most
            of them now working as a software Engineers.
          </p>
        </div>

        <Flex flexDirection="row" flexWrap="no-wrap">
          <span
            style={{
              color: 'hsl(44, 91%, 72%)',
              fontSize: rhythm(1),
              marginLeft: 0,
            }}
          >
            {infoIcon}
          </span>
          <p>
            You can find reviews from my clients, tutors and students in the{' '}
            <Link to="/testimonials">Testimonials section.</Link>
          </p>
        </Flex>
        <Flex flexDirection="row" justifyContent="space-between">
          <Activity title="Experience" activities={projects} />
          <Activity title="Education" activities={education} />
          <Activity title="Traineeships" activities={traineeships} />
        </Flex>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        projects {
          title
          site
          period
          roles
          stack
        }
        traineeships {
          title
          site
          period
          roles
          stack
        }
        education {
          title
          site
          period
          roles
          stack
        }
      }
    }
  }
`
