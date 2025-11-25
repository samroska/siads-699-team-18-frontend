
import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import UserContent from './UserContent.jsx';
import DoctorContent from './DoctorContent.jsx';
import About from './About.jsx';
import Privacy from './Privacy.jsx';
import TeamBios from './TeamBios.jsx';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Box, Button, Paper, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <Paper sx={{ p: 4, minWidth: 320, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Welcome</Typography>
        <Typography variant="subtitle1" gutterBottom>Select your role to continue:</Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
          <Button sx={{ width: 90 }} variant="contained" color="primary" onClick={() => navigate('/user')}>User</Button>
          <Button sx={{ width: 90 }} variant="contained" color="secondary" onClick={() => navigate('/doctor')}>Doctor</Button>
        </Box>
      </Paper>
    </Box>
  );
}

import React, { useState } from 'react';

function App() {
  const [open, setOpen] = useState(true);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user" element={<UserContent />} />
        <Route path="/doctor" element={<DoctorContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/team-bios" element={<TeamBios />} />
      </Routes>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Welcome to the Skin Lesion Classification app</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
           This application is not intended to replace professional medical advice, diagnosis, or treatment. Always seek the guidance of your physician or other qualified health
          care provider with any questions you may have regarding a medical condition.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary" variant="contained">Close</Button>
        </DialogActions>
      </Dialog>
      <Footer />
    </Router>
  );
}

export default App;
