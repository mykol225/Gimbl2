import React from 'react'
import { Link } from 'gatsby'
import AngleIcon from '../images/assets/angle.svg'
import ValueSimple from './ValueSimple'

const SimpleWIcon = () => {
  return (
    <div className="SimpleWIcon">
      <AngleIcon className="Icon" />
      <ValueSimple />
    </div>
  )
}

export default SimpleWIcon

//how do I dynamically import the right svg?
