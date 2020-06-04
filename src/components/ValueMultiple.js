import React from 'react'
import SimpleWIcon from '../components/SimpleWIcon'
// import Icon from '../components/Icon'
import ICONS from '../components/ICONS' //passing this info down into SimpleIcon then Icon component to render the right icon path.

const ValueMultiple = props => {
  return (
    <div className="ValueMultiple">
      <SimpleWIcon icon={ICONS.CORNERRADIUS} cursor={props.cursor} placeholder="1234" />
      <SimpleWIcon placeholder="1234" />
      <SimpleWIcon placeholder="1234" />
      <SimpleWIcon placeholder="1234" />
    </div>
  )
}

export default ValueMultiple
