import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"

import "./index.scss"

const IndexPage = () => {
  const imgs = useStaticQuery(graphql`
    query {
      webDev: file(relativePath: { eq: "webdesign.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      backend: file(relativePath: { eq: "backend.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      consulting: file(relativePath: { eq: "consulting.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lightbulb: file(relativePath: { eq: "lightbulb.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />

      <section id="about" className="about">
        <div className="container narrow">
          <h2 className="center">Software Development Is Expensive</h2>
          <p>
            <span className="attention">But it doesn't have to be... </span>
            After working for a software contracting agency, I realized that
            good software development was too expensive. Why was the agency
            charging north of $150/hour for my time? The answer wasn't that good
            software developers were too expensive. It was that the agency had
            too many layers. There were account managers, solutions engineers,
            random business people, sales, ect. ect. As the client do you need
            all of that to bring your ideas and solutions to fruition? NO!
            That's when I decided that I could bring the same quality work to
            clients without all of the bloat.
          </p>
        </div>
      </section>
      <section className="services">
        <div className="box">
          <Img fluid={imgs.webDev.childImageSharp.fluid} />
          <p className="service">Web/Application Development</p>
        </div>
        <div className="box">
          <Img fluid={imgs.backend.childImageSharp.fluid} />
          <p className="service">Backend Development</p>
        </div>
        <div className="box">
          <Img fluid={imgs.consulting.childImageSharp.fluid} />
          <p className="service">Consulting</p>
        </div>
      </section>
      <section className="need">
        <div className="container narrow">
          <h2 className="center">You Know You Need An App/Website</h2>
          <p>
            <span className="attention">
              But have no clue where to start...{" "}
            </span>
            You may have already called some software agencies only to receive
            an outrageous quote. Now you're back to square one. Or maybe you
            haven't even made that first phone call. Don't let this discourage
            you. I'm here to help you navigate, not steal your money. If you're
            looking for a solution that is beyond my capabilities, I'll tell
            you.
          </p>
        </div>
      </section>
      <section>
        <Img
          className="lightbulb"
          fluid={imgs.lightbulb.childImageSharp.fluid}
        />
      </section>
      <section className="gofromhere">
        <h2 className="center">Where Do I Go From Here?</h2>
        <div className="container">
          <div className="box">
            <i className="fa fa-commenting-o" aria-hidden="true"></i>
            <p className="service">Let's Chat</p>
          </div>
          <div className="box">
            <i className="fa fa-laptop" aria-hidden="true"></i>
            <p className="service">Sketch Out Your Ideas</p>
          </div>
          <div className="box">
            <i className="fa fa-rocket" aria-hidden="true"></i>
            <p className="service">Create</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
