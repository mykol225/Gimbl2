import React from 'react'
import '../components/styles.scss'
import Label from '../components/label'
import SimpleWIcon from '../components/SimpleWIcon'
import ValueMultiple from '../components/ValueMultiple'
import ICONS from '../components/ICONS' //passing this info down into SimpleIcon then Icon component to render the right icon path.

const IndexPage = () => (
  <div>
    {/* <ValueSimple placeholder="empty" /> */}
    <Label labelName="test string" />
    <SimpleWIcon icon={ICONS.LINKCONNECTED} placeholder="empty" />{' '}
    {/* if icon=null then it will remove the icon completely */}
    <ValueMultiple icon={ICONS.CORNERRADIUS} />
  </div>
)

export default IndexPage
