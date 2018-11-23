import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import icconic from '../img/iconnick.jpg'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <section className="landing-page-container">
          <div className="logo-container">
            <img src={icconic}/>
          </div>
          <h1>ICONNICK</h1>
          <h2>Annick Beau</h2>
          <br></br>
          <h2>Makeup Artist</h2>
          <h2>204 . 807 . 3620</h2>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
