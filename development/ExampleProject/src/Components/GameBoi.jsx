/* eslint-disable no-unused-vars */
import { Button, IconButton, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { DownArrow, LeftArrow, RightArrow, UpArrow } from './ArrowSVGs'
import styled from '@emotion/styled'
import { useMediaQuery } from 'react-responsive'
import { useLayoutEffect } from 'react'

const mainColor = 'rgb(61,61,181)'
const mainAccentColor = 'rgb(40,37,99)'
const screenBackgroundColor = 'lightgrey'
const buttonFgColor = 'rgb(38,44,51)'
const buttonBgColor = 'rgb(84, 93, 102)'
const buttonDropShadow = { filter: 'drop-shadow(0 0 5px black)' }

const createStyledButton = (backgroundColor) => styled(Button)`
  :hover {
    background-color: ${backgroundColor};
  }
  `
const StyledButton = createStyledButton(buttonBgColor)

export default function GameBoi (props) {
  const {
    handleUpButton,
    handleDownButton,
    handleLeftButton,
    handleRightButton,
    handleAButton,
    handleBButton,
    handleMenuButton,
    handleStartButton
  } = props

  const dpadEmptyStyle = {
    width: '40px', 
    height: '40px',
    display: 'inline-flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
  const dpadButtonStyle = { 
    backgroundColor: buttonBgColor,
    ...dpadEmptyStyle
  }

  // for dpadButton and actionButtons need to create function rather than an element as they were rerendering every 'frame'
  const dpadButton = (handleButton, icon) => (
    <IconButton onClick={handleButton} sx={{ }}>
      {icon}
    </IconButton>
  )

  const dpad = (
    <table style={{ borderCollapse: 'collapse', ...buttonDropShadow }}>
      <tbody>
        <tr>
          <td style={dpadEmptyStyle}></td>
          <td style={{ ...dpadButtonStyle, borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }}>
            {dpadButton(handleUpButton, <UpArrow fillColor={buttonFgColor}/>)}
          </td>
          <td style={dpadEmptyStyle}></td>
        </tr>
        <tr>
          <td style={{ ...dpadButtonStyle, borderBottomLeftRadius: '10px', borderTopLeftRadius: '10px' }}>
            {dpadButton(handleLeftButton, <LeftArrow fillColor={buttonFgColor}/>)}
          </td>
          <td style={dpadButtonStyle}></td>
          <td style={{ ...dpadButtonStyle, borderBottomRightRadius: '10px', borderTopRightRadius: '10px' }}>
            {dpadButton(handleRightButton, <RightArrow fillColor={buttonFgColor}/>)}
          </td>
        </tr>
        <tr>
          <td style={dpadEmptyStyle}></td>
          <td style={{ ...dpadButtonStyle, borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px' }}>
            {dpadButton(handleDownButton, <DownArrow fillColor={buttonFgColor}/>)}
          </td>
          <td style={dpadEmptyStyle}></td>
        </tr>
      </tbody>
    </table> 
  )

  const actionButtonsStyle = {  
    ...dpadEmptyStyle
  }
  const actionButton = (textChar, handleButton) => (
    <IconButton onClick={handleButton}
      style={{
        backgroundColor: buttonBgColor,
        width: '3rem', 
        height: '3rem',
        borderRadius: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...buttonDropShadow
      }}
    >
      <Typography sx={{ fontWeight: 'bolder', color: buttonFgColor, textAlign: 'center', fontSize: '1.5rem' }}>{textChar}</Typography>
    </IconButton>
  )

  const actionButtons = (
    <div style={{ display: 'flex', alignItems: 'center', height: '100' }}>
      <div style={{ ...actionButtonsStyle, marginTop: '20px', marginRight: '20px' }}>{actionButton('B', handleBButton)}</div>
      <div style={{ ...actionButtonsStyle, marginBottom: '20px' }}>{actionButton('A', handleAButton)}</div>
    </div>
  )

  const consoleNameCommonStyle = { fontSize: '1.7rem', whiteSpace: 'pre' }
  const consoleNameStartStyle = { color: 'rgb(106, 167, 188)', fontStyle: 'italic', fontFamily: 'Impact' }
  const consoleNameEndStyle = { fontFamily: 'Comic Sans MS', letterSpacing: '-2px', fontWeight: 'bolder' }

  return (
    <Stack direction='row' justifyContent='center' alignContent='center' minWidth={'400px'}>  
      <div style={{
        padding: '25px 20px 60px 20px',
        backgroundColor: mainColor,
        border: '5px',
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: '15px',
        borderBottomLeftRadius: '70px 90px',
        borderBottomRightRadius: '70px 90px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ 
            backgroundColor: 'black', 
            padding: '20px', 
            paddingBottom: '10px',
            borderRadius: '15px',
            borderBottomLeftRadius: '25px 30px',
            borderBottomRightRadius: '25px 30px'
          }}>
            <div style={{ width: 'fit-content', position: 'relative', backgroundColor: screenBackgroundColor, borderRadius: '3px' }}>
              {props.children}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '10px' }}>
              <span style={{ ...consoleNameStartStyle, ...consoleNameCommonStyle }}>GAME BOI</span>
              <span>
                <span style={{ color: 'rgb(223, 53, 115)', ...consoleNameEndStyle, ...consoleNameCommonStyle }}>  C</span>
                <span style={{ color: 'rgb(99, 100, 244)', ...consoleNameEndStyle, ...consoleNameCommonStyle, fontSize: '1.5rem' }}>O</span>
                <span style={{ color: 'rgb(152, 241, 75)', ...consoleNameEndStyle, ...consoleNameCommonStyle }}>L</span>
                <span style={{ color: 'rgb(228, 219, 28)', ...consoleNameEndStyle, ...consoleNameCommonStyle, fontSize: '1.5rem' }}>O</span>
                <span style={{ color: 'rgb(14, 185, 228)', ...consoleNameEndStyle, ...consoleNameCommonStyle }}>R</span>
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0px 0px 0px' }}>
          <div style={{ border: `1px solid ${mainAccentColor}`, color: mainAccentColor, borderRadius: '10px', padding: '5px 10px 5px 10px' }}>Mintendo</div>
        </div>
        <Stack direction='row' alignContent='center' justifyContent='space-around' gap='5px'>
          {dpad}
          {actionButtons}
        </Stack>
        <Stack direction='row' alignContent='center' justifyContent='center' gap='5px' sx={{ paddingTop: '55px' }}>
          <Stack direction='column' alignItems='center'>
            <StyledButton sx={{ 
              backgroundColor: buttonBgColor, 
              height: '20px',
              width: '50px',
              ...buttonDropShadow,
              borderRadius: '15px',
              padding: 0,
              margin: '0px 10px 0px 10px'
            }} onClick={handleMenuButton}/>
            <Typography sx={{ color: mainAccentColor }}>Menu</Typography>
          </Stack>
          <Stack direction='column' alignItems='center'>
            <StyledButton sx={{ 
              backgroundColor: buttonBgColor, 
              height: '20px',
              width: '50px',
              ...buttonDropShadow,
              borderRadius: '15px',
              padding: 0,
              margin: '0px 10px 0px 10px'
            }} onClick={handleStartButton}/>
            <Typography sx={{ color: mainAccentColor }}>Start</Typography>
          </Stack>
        </Stack>
      </div>
    </Stack>
  )
}

GameBoi.propTypes = {
  children: PropTypes.any,
  handleUpButton: PropTypes.func,
  handleDownButton: PropTypes.func,
  handleLeftButton: PropTypes.func,
  handleRightButton: PropTypes.func,
  handleAButton: PropTypes.func,
  handleBButton: PropTypes.func,
  handleMenuButton: PropTypes.func,
  handleStartButton: PropTypes.func
}
