/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'

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
    backgroundColor: 'grey', 
    ...dpadEmptyStyle
  }
  const dpadButton = (handleButton) => <IconButton onClick={handleButton} sx={{ backgroundColor: 'lightgrey', borderRadius: '5px' }}><div style={{
    backgroundColor: 'white',
    width: '0.8rem', 
    height: '0.8rem',
    borderRadius: '5px'
  }}/></IconButton>

  const dpad = (
    <table style={{ borderCollapse: 'collapse' }}>
      <tbody>
        <tr>
          <td style={dpadEmptyStyle}></td>
          <td style={{ ...dpadButtonStyle, borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }}>{dpadButton(handleUpButton)}</td>
          <td style={dpadEmptyStyle}></td>
        </tr>
        <tr>
          <td style={{ ...dpadButtonStyle, borderBottomLeftRadius: '10px', borderTopLeftRadius: '10px' }}>{dpadButton(handleLeftButton)}</td>
          <td style={dpadButtonStyle}></td>
          <td style={{ ...dpadButtonStyle, borderBottomRightRadius: '10px', borderTopRightRadius: '10px' }}>{dpadButton(handleRightButton)}</td>
        </tr>
        <tr>
          <td style={dpadEmptyStyle}></td>
          <td style={{ ...dpadButtonStyle, borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px' }}>{dpadButton(handleDownButton)}</td>
          <td style={dpadEmptyStyle}></td>
        </tr>
      </tbody>
    </table> 
  )

  const rightButtonsStyle = {  
    ...dpadEmptyStyle
  }
  const RightButton = (textChar, handleButton) => (
    <Stack sx={{ transform: 'rotate(-35deg)' }}>
      <IconButton onClick={handleButton}
        style={{
          backgroundColor: 'lightgrey',
          width: '2.5rem', 
          height: '2.5rem',
          borderRadius: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px',
          borderColor: 'grey',
          borderStyle: 'solid'
        }}
      />
      <Typography sx={{ fontWeight: 'bolder', color: 'grey', textAlign: 'center' }}>{textChar}</Typography>
    </Stack>
  )

  const rightButtons = (
    <div style={{ display: 'flex', alignItems: 'center', height: '100' }}>
      <div style={{ ...rightButtonsStyle, marginTop: '20px', marginRight: '10px' }}>{RightButton('B', handleBButton)}</div>
      <div style={{ ...rightButtonsStyle, marginBottom: '20px' }}>{RightButton('A', handleAButton)}</div>
    </div>
  )

  return (
    <Stack direction='row' justifyContent='center' alignContent='center'>  
      <div style={{
        padding: '25px 20px 60px 20px',
        backgroundColor: 'lightgreen',
        border: '5px',
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: '15px',
        borderBottomRightRadius: '120px'
      }}>
        <div style={{
          padding: '10px',
          backgroundColor: 'lightgrey',
          border: '10px',
          borderRight: '40px',
          borderLeft: '40px',
          borderColor: 'black',
          borderStyle: 'solid',
          borderRadius: '15px'
        }}>
          <div style={{ width: 'fit-content', position: 'relative' }}>
            {props.children}
          </div>
        </div>
        <Stack direction='row' alignContent='center' justifyContent='space-around' gap='5px' sx={{ paddingTop: '25px' }}>
          {dpad}
          {rightButtons}
        </Stack>
        <Stack direction='row' alignContent='center' justifyContent='center' gap='5px' sx={{ paddingTop: '15px' }}>
          <Stack direction='column' alignItems='center'>
            <Button style={{ 
              backgroundColor: 'green', 
              height: '20px', 
              border: '1px solid green',
              width: '50px',
              borderRadius: '15px',
              padding: 0,
              margin: '0px 10px 0px 10px'
            }} onClick={handleMenuButton}/>
            <Typography sx={{ color: 'green' }}>Menu</Typography>
          </Stack>
          <Stack direction='column' alignItems='center'>
            <Button style={{ 
              backgroundColor: 'green', 
              height: '20px', 
              border: '1px solid green',
              width: '50px',
              borderRadius: '15px',
              padding: 0,
              margin: '0px 10px 0px 10px'
            }} onClick={handleStartButton}/>
            <Typography sx={{ color: 'green' }}>Start</Typography>
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
