import React from 'react'
import 'typeface-inter'
import '../components/styles.scss'
import Label from '../components/label'
import SimpleWIcon from '../components/SimpleWIcon'
import ValueMultiple from '../components/ValueMultiple'
import SectionTitle from '../components/SectionTItle'
import ICONS from '../components/ICONS' //passing this info down into SimpleIcon then Icon component to render the right icon path.

const IndexPage = () => (
  <div>
    <SectionTitle titleName="Section Title" />
    <Label labelName="Lable name" />
    <input type="text" className="ValueSimple" placeholder="empty" />{' '}
    <SimpleWIcon icon={ICONS.ANGLE} cursor="IconEwCursor" placeholder="empty" />{' '}
    {/* if icon=null then it will remove the icon completely */}
    <ValueMultiple icon={ICONS.CORNERRADIUS} />
  </div>
)

export default IndexPage
