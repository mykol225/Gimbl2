import React from 'react'

const OptionMenu = props => (
  <div>
    <select name="Blendmodes" className="OptionMenuOld">
      <option value="passThrough">Pass through</option>
      <option value="normal">Normal</option>
      <option value="darken">Darken</option>
      <option value="multiply">Multiply</option>
    </select>
  </div>
)

export default OptionMenu
