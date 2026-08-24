import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { Navbar, Footer } from './components';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { MyNotes } from './pages/MyNotes';
import { Deploy } from './pages/Deploy';
import { About } from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <Box
        sx={{
          background: '#0d0508',
          minHeight: '100vh',
          color: '#fff',
          fontFamily: '"Outfit", "Space Grotesk", sans-serif',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-15%',
            left: '-8%',
            width: '55vw',
            height: '55vw',
            borderRadius: '38% 62% 55% 45% / 45% 40% 60% 55%',
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.14) 0%, rgba(0,0,0,0) 70%)',
            filter: 'blur(90px)',
            pointerEvents: 'none',
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-15%',
            right: '-12%',
            width: '58vw',
            height: '58vw',
            borderRadius: '55% 45% 40% 60% / 50% 55% 45% 50%',
            background: 'radial-gradient(circle, rgba(244, 63, 94, 0.13) 0%, rgba(0,0,0,0) 70%)',
            filter: 'blur(100px)',
            pointerEvents: 'none',
            zIndex: 0,
          },
        }}
      >
        {/* Background Animated Blobs */}
        <Box
          sx={{
            position: 'absolute',
            top: '55%',
            left: '55%',
            transform: 'translate(-50%, -50%)',
            width: '70vw',
            height: '50vh',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.06) 0%, rgba(0,0,0,0) 60%)',
            filter: 'blur(120px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <Navbar />

        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            zIndex: 1,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            pb: 6,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/notes" element={<MyNotes />} />
            <Route path="/deploy" element={<Deploy />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>

        <Footer />
      </Box>
    </Router>
  );
};

export default App;
