import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Why does this site exist?</h1>
    <p>I deployed this thing in order to become familiar with AWS</p>
    <p>I'm taking a free machine learning workshop from them in San Francisco the week of October 22, 2018</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
