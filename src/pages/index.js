import React from 'react'
import 'typeface-inter'
import '../components/styles.scss'
import Label from '../components/label'
import SimpleWIcon from '../components/SimpleWIcon'
import ValueMultiple from '../components/ValueMultiple'
import LargeSectionTitle from '../components/LargeSectionTitle'
import SectionTitle from '../components/SectionTItle'
import Disclosure from '../components/Disclosure'
import DisclosureSection from '../components/DisclosureSection'
import ICONS from '../components/ICONS' //passing this info down into SimpleIcon then Icon component to render the right icon path.

const IndexPage = () => (
  <div>
    <LargeSectionTitle titleName="Large Section Title" />
    <SectionTitle titleName="Section Title" />
    <DisclosureSection name="Disclosure Section" icon={ICONS.CARETRIGHT16} />
    <Label labelName="Lable name" />
    <Disclosure name="Disclosure" icon={ICONS.CARETRIGHT16} />
    <input type="text" className="ValueSimple" placeholder="empty" />{' '}
    <SimpleWIcon icon={ICONS.ANGLE} cursor="IconEwCursor" placeholder="empty" />{' '}
    {/* if icon=null then it will remove the icon completely */}
    <ValueMultiple icon={ICONS.CORNERRADIUS} />
  </div>
)

export default IndexPage
