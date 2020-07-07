import React from 'react'
import styled from 'styled-components'
import { Color } from '../modules/designTokens'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
`
const Frame = styled.div`
  box-sizing: border-box;
  border: 1px solid ${Color.black1};
  width: 64px;
  height: 64px;
  border-radius: 2px;
`

const OuterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
`
const VerticalLineContainer = styled.div`
  height: 18px;
  width: 18px;
  position: relative;
`
const VerticalLine = styled.div`
  margin: 0;
  position: absolute;
  height: 11px;
  width: 1px;
  background-color: ${Color.fgHighPriority};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const InnerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 25px;
`
const HorizontalLineContainer = styled.div`
  height: 18px;
  width: 18px;
  position: relative;
`
const HorizontalLine = styled.div`
  margin: 0;
  position: absolute;
  height: 1px;
  width: 11px;
  background-color: ${Color.fgHighPriority};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const CenterContainer = styled.div`
  height: 25px;
  width: 25px;
  position: relative;
  border: 1px dashed ${Color.black1};
  box-sizing: border-box;
  ${HorizontalLine} {
    width: 16px;
  }
  ${VerticalLine} {
    height: 16px;
  }
`

const Selector = props => {
  return (
    <Container>
      <Frame>
        <OuterRow>
          <VerticalLineContainer>
            <VerticalLine />
          </VerticalLineContainer>
        </OuterRow>
        <InnerRow>
          <HorizontalLineContainer>
            <HorizontalLine />
          </HorizontalLineContainer>
          <CenterContainer>
            <HorizontalLine />
            <VerticalLine />
          </CenterContainer>
          <HorizontalLineContainer>
            <HorizontalLine />
          </HorizontalLineContainer>
        </InnerRow>
        <OuterRow>
          <VerticalLineContainer>
            <VerticalLine />
          </VerticalLineContainer>
        </OuterRow>
      </Frame>
    </Container>
  )
}

export default Selector

//no hover, no active/focus
//64x64 container
//62x62 inner outline, rounded corner
//outer row
// -vertical target (container, 25x18)
//   -VerticalProng (selected & unselected)

//inner row

//outer row
// -vertical target (container, 25x18)
//   -VerticalProng (selected & unselected)
