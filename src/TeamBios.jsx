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
            <Typography variant="h6">Andre Onofre</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Andre Onofre is an experienced technical program manager and engineer with over a decade of leadership in cloud platforms, cybersecurity, AI-driven software, and large-scale network systems. His expertise spans full-stack development, modern SDLC practices, and the design and deployment of cloud-native applications. He holds an MBA from Georgia Tech supported by PMP, Scrum Master, SAFe, and TensorFlow Developer certifications. Over 12 years, Andre served in several key positions at Cisco Systems, contributing to complex enterprise initiatives and large-scale technical programs. André recently joined Google as a Technical Program Manager, where he continues to drive high-impact, cross-functional projects.
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Originally from Brazil, Andre now lives in Atlanta with his family. He enjoys exploring new restaurants and watching martial arts movies. He joined the MADS program to deepen his expertise in machine learning
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              For more about André’s professional journey, visit his LinkedIn profile: https://www.linkedin.com/in/andre-luis-onofre-97347428/ 
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Link href="https://linkedin.com/in/sroska" color="inherit" target="_blank">
              <Tooltip title="Samantha Roska">
                <Avatar alt="Samantha" src="sam2.png" sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }} />
              </Tooltip>
            </Link>
            <Typography variant="h6">Samantha Roska</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Samantha Roska is a software engineer with more than a decade of experience building scalable applications, modernizing legacy systems, and enabling cloud-native development. She holds dual bachelor’s degrees in Computer Information Systems and Business Legal Studies from Arizona State University.
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Samantha has built her career at State Farm- one of the largest insurance and financial services companies in the United States, where she has served in roles spanning software development, technical product ownership, and platform enablement. Her experience includes developing React.js front-end applications backed by Python services, designing robust monitoring and logging solutions, and implementing CI/CD pipelines on Amazon EKS to support reliable, containerized deployments. As a technical product owner, she led a 12-member development team through a full migration from a legacy J2EE/Struts platform to a modern Spring/React architecture. Beyond engineering, Samantha has contributed to developer growth and culture—founding an internal code learning initiative that increased hackathon participation, teaching hundreds of developers how to adopt Terraform Enterprise, and hosting an internal podcast focused on software development best practices.
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Samantha lives in Arizona and enjoys hiking desert trails with her dog, Lily Potter. She chose MADS because she wanted to learn how to translate intuition into data.
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              For more about Samantha’s professional journey, visit his LinkedIn profile: https://www.linkedin.com/in/sroska/ 
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Link href="https://www.linkedin.com/in/sawsan-allam-8b5b8842/" color="inherit" target="_blank">
              <Tooltip title="Sawsan Allam">
                <Avatar alt="Sawsan" src="sawsan.png" sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }} />
              </Tooltip>
            </Link>
            <Typography variant="h6">Sawsan Allam</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Sawsan Allam is a public health specialist with over a decade of experience working across health systems, project coordination, and applied research in the Middle East region. She has led and supported large-scale health initiatives with organizations including the WHO, UNICEF, World Bank, UNFPA, the American University of Beirut, and IQVIA, working closely with ministries of health on quality assurance frameworks, health benefit package development, electronic health record modernization efforts, and national-scale health assessments. Her expertise spans stakeholder engagement, evidence synthesis, qualitative research, and health system strengthening. She holds a Master of Public Health and is completing her MADS to create synergies as she manages projects. Prior to her consultancy career, she coordinated major field research projects, including a nationwide primary health care quality assessment across 69 centers in Lebanon led by a Principal Investigator at Harvard University.
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Outside of work, Sawsan lives in Lebanon—a country known for its rich cuisine and vibrant culture—and comes from a large family with six siblings and fourteen niblings who keep life lively. When she needs to unwind after a long day, she enjoys late-evening drives to take in the city at a calmer pace
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              For more about Sawsan’s professional journey, visit her LinkedIn profile: https://www.linkedin.com/in/sawsan-allam-8b5b8842/
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default TeamBios;