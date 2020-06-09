import React from 'react'

const Combobox = props => (
  <div>
    <input type="text" list="options" className="Combobox" placeholder="1x" />
    <datalist id="options">
      <option value="0.5x" />
      <option value="0.75x" />
      <option value="1x" />
      <option value="1.5x" />
      <option value="2x" />
      <option value="3x" />
      <option value="4x" />
      <optgroup>
        <option value="4x" />
      </optgroup>
    </datalist>
  </div>
)

export default Combobox
