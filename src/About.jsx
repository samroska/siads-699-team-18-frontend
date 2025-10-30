import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function About() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10, p: 2 }}>
      <Paper sx={{ p: 4, maxWidth: 800 }}>
        <Typography variant="h4" gutterBottom>
          About
        </Typography>
        <Typography variant="body1">
          Skin cancer is a growing global health concern, with rising incidence rates and limited access to early diagnostic services in many regions- 
          for example melanoma accounts for around 75% of skin cancer-related deaths (Didier et al., 2024). Timely detection is essential, as early-stage 
          skin cancers are highly treatable, decreasing healthcare costs and improving health outcomes. Traditional diagnostic methods rely on specialist 
          expertise and dermatoscopic imaging, which are often scarce in low-resource or remote settings. Advances in deep learning offer promising solutions 
          by enabling automated classification of skin lesions from image data, potentially bridging these gaps.
          
        </Typography>
            <br /><br />
        <Typography variant="body1">
          This motivated our proposal to develop and evaluate machine learning models that can distinguish cancerous vs. benign skin lesions, leveraging 
          publicly available dermatoscopic and smartphone-based datasets. We propose two complementary models: one for healthcare providers, designed to analyze 
          dermatoscopic images, and another for the general public, enabling classification of smartphone-captured images via a mobile-friendly web application 
          inspired by the real-time mobile performance demonstrated by Oztel et al. (2023). This dual approach supports both professional diagnostics and early 
          self-assessment, potentially prompting more timely medical consultations.
        </Typography>
             <br /><br />
        <Typography variant="body1">
          This application is not intended to replace professional medical advice, diagnosis, or treatment. Always seek the guidance of your physician or other qualified health
          care provider with any questions you may have regarding a medical condition.
        </Typography>
      </Paper>
    </Box>
  );
}

export default About;