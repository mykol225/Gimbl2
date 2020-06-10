import React from 'react'
import SimpleWIcon from '../components/SimpleWIcon'
// import Icon from '../components/Icon'
import ICONS from '../components/ICONS' //passing this info down into SimpleIcon then Icon component to render the right icon path.

const ValueMultiple = props => {
  return (
    <div className="ValueMultiple">
      <SimpleWIcon
        icon={ICONS.CORNERRADIUS}
        cursor={props.cursor}
        value={props.value}
        placeholder={props.placeholder}
      />
      <SimpleWIcon value={props.value} placeholder={props.placeholder} />
      <SimpleWIcon value={props.value} placeholder={props.placeholder} />
      <SimpleWIcon value={props.value} placeholder={props.placeholder} />
    </div>
  )
}

export default ValueMultiple
