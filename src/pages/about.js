import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import market from "../images/mapMarker.png"

import mapMarker from "../images/mapMarker.png"

import "./about.scss"

const mapUrl = 'https://www.google.com/maps/place/823+Francis+St,+St+Joseph,+MO+64501/@39.7675207,-94.8519035,17z/data=!3m1!4b1!4m5!3m4!1s0x87c01ba7d3ead389:0x7e4122ed7fba4214!8m2!3d39.7675207!4d-94.8497148';

const About = () => {
  return (
    <Layout className="about">
      <SEO title="About"/>
      <section>
        <p>Ryan VanBelkum Software Services (RVSS) is a software development shop located
          in <a href={mapUrl}>Saint Joseph, MO. <img className="map-marker" src={mapMarker} alt="map marker"/></a>
          We pride ourselves on web design, app development and custom software solutions. 
        </p>
      </section>
    </Layout>
  )
}

export default About
