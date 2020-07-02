import React from 'react'
import styled from 'styled-components'

const SingleRowStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(28, 8px);
  grid-template-rows: 32px;
  padding-left: 8px;
  padding-right: 8px;
  align-items: center;
`

const SingleRow = props => {
  return <SingleRowStyle>{props.children}</SingleRowStyle>
}

export default SingleRow
