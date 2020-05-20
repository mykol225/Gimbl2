import React from 'react'
import { Link } from 'gatsby'

import '../components/styles.scss'
import Value from '../components/value.js'

const IndexPage = () => (
  <div>
    <p>Hello World</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Value />
  </div>
)

export default IndexPage
