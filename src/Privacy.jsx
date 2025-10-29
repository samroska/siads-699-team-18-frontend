import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function Privacy() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10, p: 2 }}>
      <Paper sx={{ p: 4, maxWidth: 800 }}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1">
          This is the Privacy Policy page. Content coming soon.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Privacy;