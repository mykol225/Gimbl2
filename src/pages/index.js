import React from 'react'
import '../components/styles.scss'
import ValueSimple from '../components/ValueSimple'
import Label from '../components/label'
import SimpleWIcon from '../components/SimpleWIcon'
import Icon from '../components/Icon'
import ICONS from '../components/ICONS'

const IndexPage = () => (
  <div>
    <ValueSimple placeholder="empty" />
    <Label labelName="test string" />
    <SimpleWIcon icon={ICONS.LINKCONNECTED} placeholder="empty" />
  </div>
)

export default IndexPage
