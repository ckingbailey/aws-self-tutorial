import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi, my name is Colin King-Bailey</h1>
    <p>I create applications with HTML, CSS, JS, PHP, and MySQL</p>
    <p>I've also worked on projects that used Ruby, Python, and Java</p>
    <p>Currently I support a construction data management app I helped build for the BART extension to San Jose</p>
    <Link to="/page-2/">Why is this here?</Link>
  </Layout>
)

export default IndexPage
