import React from 'react'
import { AppBar, Toolbar, Typography, Avatar, Link, Tooltip, Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'


function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Box>
            <Box>
              
              <Typography variant="h6">
                 <img src="/um.png" alt="UMich" style={{ width: 20, height: 20 , marginRight: 3}} />
                Lesion Classifier
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="subtitle2">
                  SIADS 699 Team 18
                </Typography>

              </Box>
            </Box>
            {/* <Typography variant="subtitle2">
              SIADS 699 Team 18
            </Typography> */}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: 1, ml: 4 }}>
            <Button color="inherit" onClick={() => navigate('/')}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate('/about')}>
              About
            </Button>
            <Button color="inherit" onClick={() => navigate('/privacy')}>
              Privacy
            </Button>
            <Button color="inherit" onClick={() => navigate('/team-bios')}>
              Team Bios
            </Button>
          </Box>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header