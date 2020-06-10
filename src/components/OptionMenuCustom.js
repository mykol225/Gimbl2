import React from 'react'
import Icon32 from '../components/Icon32'
import Icon8 from '../components/Icon8'

const OptionMenuCustom = props => {
  const open = <div className="OptionMenu-options"></div>
  const closed = <div className="OptionMenu-options open"></div>
  let menu = document.querySelector('OptionMenu-options')
  const showOptions = () => {
    console.log(menu)
  }

  return (
    <div className="OptionMenu-wrapper">
      <div className="OptionMenu">
        <div className="OptionMenu-trigger" onClick={showOptions}>
          <Icon32 icon={props.icon} />
          <span>Pass through</span>
          <Icon8 icon={props.arrow} className="OptionMenu-arrow" />
        </div>
        <div className="OptionMenu-options">
          <span className="OptionMenu-option selected" datavalue="pass-through">
            <Icon32 icon={props.selecticon} />
            Pass through
          </span>
          <span className="OptionMenu-option" datavalue="normal">
            Normal
          </span>
          <span className="OptionMenu-option" datavalue="darken">
            Darken
          </span>
        </div>
      </div>
    </div>
  )
}

export default OptionMenuCustom

//How do I make the OptionMenu-options appear when trigger is clicked?
