import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import DeleteIcon from '@mui/icons-material/Delete';
import WarningIcon from '@mui/icons-material/Warning';

function Privacy() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10, p: 2 }}>
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
            No Image Storage
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>We do not store, save, or retain any images you upload.</strong> All images are processed temporarily in memory for analysis and are immediately discarded after generating predictions. Your images never reach our servers or databases.
          </Typography>
        </Box>

        {/* Data Collection Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#43A047' }}>
            <SecurityIcon />
            No Personal Data Collection
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>We do not collect, track, or store any personal information.</strong> This includes:
          </Typography>
          <ul style={{ marginLeft: '20px' }}>
            <li>No user accounts or registration required</li>
            <li>No personal identifiers collected</li>
            <li>No browsing behavior tracking</li>
            <li>No cookies for tracking purposes</li>
            <li>No location data collection</li>
          </ul>
        </Box>

        {/* Medical Disclaimer Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#ff9800' }}>
            <WarningIcon />
            Preliminary Predictions Only
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>This application provides preliminary AI-based predictions for educational and research purposes only.</strong> The predictions are:
          </Typography>
          <ul style={{ marginLeft: '20px' }}>
            <li>Not a substitute for professional medical diagnosis</li>
            <li>Not intended for clinical decision-making</li>
            <li>Provided for informational purposes only</li>
            <li>Should not delay seeking professional medical advice</li>
          </ul>
        </Box>

        {/* How It Works Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            How Our Privacy Protection Works
          </Typography>
          <Typography variant="body1" paragraph>
            1. <strong>Upload:</strong> You select an image from your device
          </Typography>
          <Typography variant="body1" paragraph>
            2. <strong>Process:</strong> The image is analyzed by our AI model in real-time
          </Typography>
          <Typography variant="body1" paragraph>
            3. <strong>Predict:</strong> Results are displayed immediately on your screen
          </Typography>
          <Typography variant="body1" paragraph>
            4. <strong>Delete:</strong> The image is automatically removed from memory
          </Typography>
        </Box>

        {/* Contact Section */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            Questions About Privacy?
          </Typography>
          <Typography variant="body1">
            This application was developed as part of the SIADS 699 capstone project. If you have any questions about our privacy practices, please contact the development team.
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