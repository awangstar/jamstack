import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <p id="intro">Hi, I am Angela. I am a full stack  Product Designer in SF. I would love to participate in the JAMstack hackathon!</p>

    <a id="button" href="https://angelawangproduct.com/"> View My Portfolio</a>
  </Layout>
)

export default IndexPage
