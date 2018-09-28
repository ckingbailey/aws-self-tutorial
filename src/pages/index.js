import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello World!</h1>
    <p>My name's Colin</p>
    <p>I write HTML, CSS, JS, PHP, and MySQL</p>
    <p>I've also mucked around with a little Ruby, Python, and Java</p>
    <p>I just finished a contract building a data management app related to the BART extension to San Jose</p>
    <p>I'm excited to build something 🤩<span className="hightlight-text">wow</span>🤩 with a bunch of great people at JAMstack Conf 2018</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
