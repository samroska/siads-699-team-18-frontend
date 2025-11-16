import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function About() {
  return (
    <Box sx={{ display: 'flex', mt: 10, p: 2 ,  textAlign: 'left' }}>
      <Paper sx={{ p: 4, maxWidth: 800 }}>
        <Typography variant="h4" gutterBottom>
          About
        </Typography>
        <Typography variant="body1">
          This web application was developed as part of student’s Capstone Project (see the Team Bios page) for the Master of Applied Data Science (MADS) 
          program at the University of Michigan – Ann Arbor. The idea was born from a personal motivation: one of our team members’ elderly father had developed 
          suspicious skin colorations on his face but consistently refused to visit a dermatologist. This inspired our team to explore whether a data-driven 
          approach could provide an initial, accessible way to assess the potential seriousness of such skin lesions — encouraging earlier medical consultation when necessary.
        </Typography>
            <br />
        <Typography variant="body1">
          Skin cancer represents a growing global health challenge, accounting for millions of new cases each year. Melanoma, though less common, causes about 75% of skin-cancer–related deaths<sup>[1]</sup>. 
          Early detection is vital, as early-stage skin cancers are highly treatable and lead to improved outcomes and lower healthcare costs. However, traditional diagnostics often rely on 
          specialist expertise and dermatoscopic imaging, both of which are limited in many low-resource or remote areas.
        </Typography>
             <br />
        <Typography variant="body1">
          Our team came together to design and train machine learning models capable of distinguishing between benign and potentially cancerous skin lesions using image data. To address the needs of different users, we developed two complementary models:
            <Box component="ul" sx={{ pl: 4 }}>
            <li>One designed for healthcare professionals, trained on high-quality dermatoscopic images (the BCN20000 dataset).</li>
            <li>Another designed for the general public, trained on smartphone images (the PAD-UFES-20 dataset) and integrated into this web app for easy, mobile-friendly use.</li>
            </Box>
        </Typography>
         <Typography variant="body1">
          Together, these models aim to support earlier assessment, increase awareness, and encourage timely medical follow-up—not to replace professional diagnosis, but to help users better understand when a lesion may warrant attention.
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          <strong>References:</strong>
          <br />
          [1] Didier, A. J., Nandwani, S. V., Watkins, D., Fahoury, A. M., Campbell, A., Craig, D. J., ... & Parquet, N. (2024). Patterns and trends in melanoma mortality in the United States, 1999–2020. BMC cancer, 24(1), 790.
        </Typography>
      </Paper>
    </Box>
  );
}

export default About;