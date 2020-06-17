import React from 'react'
import 'typeface-inter'
import '../components/styles.scss'
import ICONS from '../components/ICONS' //passing this info down into SimpleIcon then Icon component to render the right icon path.
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
import Hyperlink from '../components/Hyperlink'
import Button from '../components/Button'
import IconButton from '../components/IconButton'
import OptionButton from '../components/OptionButton'
import OptionStrip from '../components/OptionStrip'

const DropDownItems = [
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

const OptionButtonOptions = [
  {
    id: 1,
    name: 'Left align',
    icon: ICONS.TEXTALIGNLEFT16,
    initialStateOn: true,
  },
  {
    id: 2,
    name: 'Center align',
    icon: ICONS.TEXTALIGNCENTER16,
    initialStateOn: false,
  },
  {
    id: 3,
    name: 'Right align',
    icon: ICONS.TEXTALIGNRIGHT16,
    initialStateOn: false,
  },
]

const IndexPage = () => (
  <div>
    <LargeSectionTitle titleName="Large Section Title" />
    <SectionTitle titleName="Section Title" />
    <DisclosureSection name="Disclosure Section" icon={ICONS.CARETRIGHT16} />
    <Label labelName="Lable name" />
    <Hyperlink title="Go to Master Component" link="google.com" target="_blank" />
    <Disclosure name="Disclosure" icon={ICONS.CARETRIGHT16} />
    <ValueSimple value="" placeholder="placeholder" />
    <SimpleWIcon icon={ICONS.ANGLE} cursor="IconEwCursor" value="" placeholder="empty" />{' '}
    <ValueMultiple icon={ICONS.CORNERRADIUS} value="" placeholder="0" />
    <Combobox />
    <Dropdown titleName={DropDownItems[0].value} items={DropDownItems} icon={ICONS.BLENDEMPTY} />
    <Button title="Show Prototype Settings" />
    <IconButton icon={ICONS.STYLES} cursor="pointer" />
    <OptionButton icon={ICONS.LINKBROKEN} cursor="pointer" />
    <OptionStrip name="text alignment" options={OptionButtonOptions} />
  </div>
)

export default IndexPage
