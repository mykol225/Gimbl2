import React, { useState } from 'react'
import Icon16 from '../components/Icon16'

const OptionStrip = ({ name, options }) => {
  const [isSelected, setSelected] = useState(options[0].id)

  console.log(options[isSelected - 1].name)

  return (
    <div className="OptionStrip-container" title={name}>
      <div className="OptionStrip_hover">
        {options.map(option => (
          <button
            key={option.id}
            className={isSelected == option.id ? 'OptionStrip_option on' : 'OptionStrip_option'}
            onClick={event => setSelected(option.id)}
          >
            <Icon16 icon={option.icon} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default OptionStrip
