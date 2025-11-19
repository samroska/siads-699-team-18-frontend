import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import DeleteIcon from '@mui/icons-material/Delete';
import WarningIcon from '@mui/icons-material/Warning';

function Privacy() {
  return (
    <Box sx={{ display: 'flex', mt: 10, p: 2, textAlign: 'left' }}>
      <Paper sx={{ p: 4, maxWidth: 800 }}>
        <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SecurityIcon color="primary" />
          Privacy Policy
        </Typography>
        
        <Divider sx={{ mb: 3 }} />
        
        {/* Image Storage Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#43A047' }}>
            <DeleteIcon />
            Image Handling: No Image Storage
          </Typography>
          <Typography variant="body1">
            <strong>We do not store, save, or retain any images you upload.</strong> 
            We do not store, save, or retain any images you upload. All images are processed temporarily in memory and are immediately discarded after generating predictions. Your images never reach any database or long-term storage.
          </Typography>
        </Box>
        <Divider sx={{ my: 3 }} />
        {/* Data Collection Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#43A047' }}>
            <SecurityIcon />
           Personal Data: No Information Collected
          </Typography>
          <Typography variant="body1">
            <strong>We do not collect, track, or store any personal information.</strong> This includes:
          </Typography>
          <Box sx={{ ml: 2 }}>
            <Typography variant="body1"><li>No user accounts or login</li></Typography>
            <Typography variant="body1"><li>No personal identifiers </li></Typography>
            <Typography variant="body1"><li>No browsing behavior tracking</li></Typography>
            <Typography variant="body1"><li>No tracking cookies</li></Typography>
            <Typography variant="body1"><li>No location data </li></Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 3 }} />
        {/* Medical Disclaimer Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#ff9800' }}>
            <WarningIcon />
            Model Output: Preliminary Predictions Only
          </Typography>
          <Typography variant="body1">
            <strong>This application provides preliminary AI-based predictions for educational and research purposes only.</strong> The predictions are:
          </Typography>
          <Box sx={{ ml: 2 }}>
            <Typography variant="body1"><li>Are not a medical diagnosis</li></Typography>
            <Typography variant="body1"><li>Should not guide clinical decisions</li></Typography>
            <Typography variant="body1"><li>Are intended only as general information</li></Typography>
            <Typography variant="body1"><li>Should not delay seeking professional medical care</li></Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 3 }} />
        {/* How It Works Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            How Our Privacy Protection Works
          </Typography>
          <Typography variant="body1" paragraph>
            1. <strong>Upload:</strong> You choose an image from your device
          </Typography>
          <Typography variant="body1" paragraph>
            2. <strong>Process:</strong> The image is analyzed by our AI model in real time
          </Typography>
          <Typography variant="body1" paragraph>
            3. <strong>Predict:</strong> Your result appears immediately on your screen
          </Typography>
          <Typography variant="body1" paragraph>
            4. <strong>Delete:</strong> The image is automatically cleared from memory
          </Typography>
        </Box>
        <Divider sx={{ my: 3 }} />
        {/* Contact Section */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            Questions About Privacy?
          </Typography>
          <Typography variant="body1">
            This application was developed as part of the SIADS 699 Capstone Project. If you have any questions about our privacy practices, please contact the development team.
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />
        
        <Typography variant="body2" color="text.secondary" align="center">
          Last updated: November 2025 | SIADS 699 Team 18
        </Typography>
      </Paper>
    </Box>
  );
}

export default Privacy;