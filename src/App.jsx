
import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import UserContent from './UserContent.jsx';
import DoctorContent from './DoctorContent.jsx';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Box, Button, Paper, Typography } from '@mui/material';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <Paper sx={{ p: 4, minWidth: 320, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Welcome</Typography>
        <Typography variant="subtitle1" gutterBottom>Select your role to continue:</Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
          <Button variant="contained" color="primary" onClick={() => navigate('/user')}>User</Button>
          <Button variant="contained" color="secondary" onClick={() => navigate('/doctor')}>Doctor</Button>
        </Box>
      </Paper>
    </Box>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user" element={<UserContent />} />
        <Route path="/doctor" element={<DoctorContent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
