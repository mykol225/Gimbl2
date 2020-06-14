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
import ValueSimple from '../components/ValueSimple'
import Combobox from '../components/Combobox'
import Dropdown from '../components/Dropdown'
import ICONS from '../components/ICONS' //passing this info down into SimpleIcon then Icon component to render the right icon path.

const items = [
  {
    id: 1,
    value: 'Pass through',
  },
  {
    id: 2,
    value: 'Normal',
  },
  {
    id: 3,
    value: 'Darken',
  },
  {
    id: 4,
    value: 'Multiply',
  },
  {
    id: 5,
    value: 'Lighten',
  },
]

const IndexPage = () => (
  <div>
    <LargeSectionTitle titleName="Large Section Title" />
    <SectionTitle titleName="Section Title" />
    <DisclosureSection name="Disclosure Section" icon={ICONS.CARETRIGHT16} />
    <Label labelName="Lable name" />
    <Disclosure name="Disclosure" icon={ICONS.CARETRIGHT16} />
    <ValueSimple value="" placeholder="placeholder" />
    <SimpleWIcon icon={ICONS.ANGLE} cursor="IconEwCursor" value="" placeholder="empty" />{' '}
    <ValueMultiple icon={ICONS.CORNERRADIUS} value="" placeholder="0" />
    <Combobox />
    <Dropdown titleName={items[0].value} items={items} icon={ICONS.BLENDEMPTY} />
  </div>
)

export default IndexPage
