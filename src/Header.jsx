import React from 'react'
import { AppBar, Toolbar, Typography, Avatar, Link, Tooltip } from '@mui/material'


function Header() {

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" >
             SIADS 699 Team 18 Lesion Classifier
          </Typography>
          <div style={{ flexGrow: 1 }} />
            <Link href="https://www.linkedin.com/in/andre-luis-onofre-97347428/" color="inherit" target="_blank">
                <Tooltip title="Andre Luis Camarosano Onofre" >
                    <Avatar alt="Andre" src="andre.png" />
                </Tooltip>
            </Link>
            <Link href="https://linkedin.com/in/sroska" color="inherit" target="_blank">
                <Tooltip title="Samantha Roska">
                    <Avatar alt="Samantha" src="sam2.png" />
                </Tooltip>
            </Link>
            <Link href="https://www.linkedin.com/in/sawsan-allam-8b5b8842/" color="inherit" target="_blank">
                <Tooltip title="Sawsan Allam">
                    <Avatar alt="Sawsan" src="sawsan.png" />
                </Tooltip>
            </Link>
          <div/>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header