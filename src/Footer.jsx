import React from 'react'
import { Box } from '@mui/material'
import WarningIcon from '@mui/icons-material/Warning'

function Footer() {
  return (
    <>
      <footer style={{ height: '100%', textAlign: 'center', paddingTop: '20px' }}>
        {/* <p>© 2025 SAIDS 699 Team 18</p> */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <WarningIcon sx={{ color: '#ff9800', fontSize: 20 }} />
          <p style={{ margin: 0 }}>This app does not provide medical diagnosis — seek medical advice for confirmation.</p>
        </Box>
      </footer>
    </>
  )
}

export default Footer