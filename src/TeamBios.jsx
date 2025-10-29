import React from 'react';
import { Box, Typography, Paper, Grid, Avatar, Link, Tooltip } from '@mui/material';

function TeamBios() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10, p: 2 }}>
      <Paper sx={{ p: 4, maxWidth: 1000 }}>
        <Typography variant="h4" gutterBottom align="center">
          Team Bios
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Link href="https://www.linkedin.com/in/andre-luis-onofre-97347428/" color="inherit" target="_blank">
              <Tooltip title="Andre Luis Camarosano Onofre" >
                <Avatar alt="Andre" src="andre.png" sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }} />
              </Tooltip>
            </Link>
            <Typography variant="h6">Andre Luis Camarosano Onofre</Typography>
            <Typography variant="body2" color="text.secondary">
              Bio coming soon.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Link href="https://linkedin.com/in/sroska" color="inherit" target="_blank">
              <Tooltip title="Samantha Roska">
                <Avatar alt="Samantha" src="sam2.png" sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }} />
              </Tooltip>
            </Link>
            <Typography variant="h6">Samantha Roska</Typography>
            <Typography variant="body2" color="text.secondary">
              Bio coming soon.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Link href="https://www.linkedin.com/in/sawsan-allam-8b5b8842/" color="inherit" target="_blank">
              <Tooltip title="Sawsan Allam">
                <Avatar alt="Sawsan" src="sawsan.png" sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }} />
              </Tooltip>
            </Link>
            <Typography variant="h6">Sawsan Allam</Typography>
            <Typography variant="body2" color="text.secondary">
              Bio coming soon.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default TeamBios;