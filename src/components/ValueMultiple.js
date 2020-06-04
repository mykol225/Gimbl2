import React from 'react'
import SimpleWIcon from '../components/SimpleWIcon'
// import Icon from '../components/Icon'
import ICONS from '../components/ICONS' //passing this info down into SimpleIcon then Icon component to render the right icon path.

const ValueMultiple = props => {
  return (
    // <div className="ValueMultiple">
    //   <Icon icon={props.icon} />
    //   <div className="ValueSimple-container" id="minus8px">
    //     <input type="text" className="ValueSimple-input" value={props.value} />
    //   </div>
    //   <div className="ValueSimple-container">
    //     <input type="text" className="ValueSimple-input" value={props.value} />
    //   </div>
    //   <div className="ValueSimple-container">
    //     <input type="text" className="ValueSimple-input" value={props.value} />
    //   </div>
    //   <div className="ValueSimple-container">
    //     <input type="text" className="ValueSimple-input" value={props.value} />
    //   </div>
    // </div>
    <div className="ValueMultiple">
      <SimpleWIcon icon={ICONS.CORNERRADIUS} placeholder="1234" />
      <SimpleWIcon placeholder="1234" />
      <SimpleWIcon placeholder="1234" />
      <SimpleWIcon placeholder="1234" />
    </div>
  )
}

export default ValueMultiple
