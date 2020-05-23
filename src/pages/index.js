import React from 'react'
import { Link } from 'gatsby'
import '../components/styles.scss'
import ValueSimple from '../components/ValueSimple'
import Label from '../components/label'
import SimpleWIcon from '../components/SimpleWIcon'
const IndexPage = () => (
  <div>
    <ValueSimple />
    <Label labelName="test string" />
    <SimpleWIcon />
  </div>
)

export default IndexPage
