import { createTheme, alpha } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: '"Outfit", "Space Grotesk", "Inter", "Helvetica", sans-serif',
    h1: { fontWeight: 900 },
    h2: { fontWeight: 900 },
    h3: { fontWeight: 800 },
    h4: { fontWeight: 800 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    subtitle1: { fontWeight: 500 },
    body1: { fontWeight: 400 },
    allVariants: {
      color: '#ffffff',
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#f43f5e', // Rose
      light: '#fb7185',
      dark: '#e11d48',
    },
    secondary: {
      main: '#f59e0b', // Amber
      light: '#fbbf24',
      dark: '#d97706',
    },
    info: {
      main: '#14b8a6', // Teal
    },
    background: {
      default: '#0d0508',
      paper: 'rgba(255, 255, 255, 0.03)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0d0508',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          color: '#ffffff',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          backgroundImage: 'none',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.07)',
          borderRadius: '28px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '999px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(244, 63, 94, 0.3)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #f43f5e 0%, #f59e0b 100%)',
          border: 'none',
          '&:hover': {
            background: 'linear-gradient(135deg, #e11d48 0%, #d97706 100%)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            '& fieldset': {
              border: 'none',
            },
            '&:hover fieldset': {
              border: 'none',
            },
            '&.Mui-focused fieldset': {
              border: 'none',
            },
            '&.Mui-focused': {
              border: '1px solid #f43f5e',
              boxShadow: '0 0 10px rgba(244, 63, 94, 0.2)',
            },
          },
        },
      },
    },
  },
});
