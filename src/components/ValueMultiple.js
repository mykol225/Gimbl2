import React from 'react'
import Icon from '../components/Icon'

const ValueMultiple = props => {
  return (
    <div className="ValueMultiple">
      <Icon icon={props.icon} />
      <div className="ValueSimple-container" id="minus8px">
        <input type="text" className="ValueSimple-input" value={props.value} />
      </div>
      <div className="ValueSimple-container">
        <input type="text" className="ValueSimple-input" value={props.value} />
      </div>
      <div className="ValueSimple-container">
        <input type="text" className="ValueSimple-input" value={props.value} />
      </div>
      <div className="ValueSimple-container">
        <input type="text" className="ValueSimple-input" value={props.value} />
      </div>
    </div>
  )
}

export default ValueMultiple

/*

• Still having some bugs with the borders.
• Currently trying to use an inner box-shadow instead
of border to keep things from shifting. But it'll take
some heavy refactoring of the css.
• Hopefully that will fix some of the shifting issues I'm having
Value container is shifting on hover when the larger container is in focus 

*/
