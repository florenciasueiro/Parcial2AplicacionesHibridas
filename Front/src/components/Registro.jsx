import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/Check';
import FormHelperText from '@mui/material/FormHelperText';

import LoginCSS from '../css/Login.module.css';
import useRegistro from '../Service/APIregister';

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    success: {
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: [
      '"Segoe UI"',
    ].join(','),
  },
});

const Register = () => {
  const navigate = useNavigate();
  const [show201, setShow201] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [shakingInputs, setShakingInputs] = useState([]);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [registerClicked, setRegisterClicked] = useState(false);
  const [inputErrors, setInputErrors] = useState({
    username: false,
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    password: false,
  });

  const registro = useRegistro();

  const isInputShaking = (name) =>
    registerClicked &&
    (name === 'username' ||
      name === 'firstName' ||
      name === 'lastName' ||
      name === 'email' ||
      name === 'phoneNumber' ||
      shakingInputs.includes(name.toLowerCase()));

  useEffect(() => {
    if (show201) {
      setRegisterClicked(false);
      setTimeout(() => {
        navigate('/'); // Redirect to the home page after 3 seconds
      }, 2000);
    }
  }, [show201, navigate]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox' && name === 'terms') {
      setTermsAccepted(checked);
    }

    if (value.trim() === '') {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        [name]: true,
      }));
      if (!isInputShaking(name)) {
        setShakingInputs((prevInputs) => [...prevInputs, name]);
      }
    } else {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
      setShakingInputs((prevInputs) =>
        prevInputs.filter((input) => input !== name)
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setRegisterClicked(true);
    const data = new FormData(event.currentTarget);

    const usuario = {
      username: data.get('username'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      phoneNumber: data.get('phoneNumber'),
      password: data.get('password'),
    };

    // Validación de campos requeridos
    const errors = {};
    if (usuario.username.trim() === '') {
      errors.username = true;
    }
    if (usuario.firstName.trim() === '') {
      errors.firstName = true;
    }
    if (usuario.lastName.trim() === '') {
      errors.lastName = true;
    }
    if (usuario.email.trim() === '') {
      errors.email = true;
    }
    if (usuario.phoneNumber.trim() === '') {
      errors.phoneNumber = true;
    }
    if (usuario.password.trim() === '') {
      errors.password = true;
    }

    if (Object.keys(errors).length > 0) {
      setInputErrors(errors);
      setRegisterClicked(false);
      return; // Detener el envío del formulario si hay errores
    }

    try {
      const res = await registro(usuario);

      if (res === 201) {
        setShow201(true);
      } else if (res === 400) {
        setErrorMessage('Por favor, verifique los datos ingresados.');
      } else if (res === 409) {
        setErrorMessage('Ya existe un usuario con esa dirección de correo electrónico.');
      } else if (res === 500) {
        setErrorMessage('Por favor, inténtelo nuevamente más tarde.');
      }
    } catch (error) {
      setErrorMessage('Error inesperado. Por favor, inténtelo nuevamente más tarde.');
    } finally {
      setRegisterClicked(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {show201 ? (
            <>
              <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
                <CheckIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                ¡Registro exitoso!
              </Typography>
            </>
          ) : (
            <>
              <Avatar sx={{ m: 3, bgcolor: 'primary.main' }}>
                {registerClicked ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  <CheckIcon />
                )}
              </Avatar>
              <Typography component="h1" variant="h5">
                Registro
              </Typography>
            </>
          )}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Nombre de usuario"
                  autoFocus
                  error={inputErrors.username}
                  helperText={inputErrors.username && 'Ingrese su nombre de usuario'}
                  onChange={handleInputChange}
                  className={isInputShaking('username') ? LoginCSS.shake : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  error={inputErrors.firstName}
                  helperText={inputErrors.firstName && 'Ingrese su nombre'}
                  onChange={handleInputChange}
                  className={isInputShaking('firstName') ? LoginCSS.shake : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="family-name"
                  error={inputErrors.lastName}
                  helperText={inputErrors.lastName && 'Ingrese su apellido'}
                  onChange={handleInputChange}
                  className={isInputShaking('lastName') ? LoginCSS.shake : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo Electrónico"
                  name="email"
                  autoComplete="email"
                  error={inputErrors.email}
                  helperText={inputErrors.email && 'Ingrese su correo electrónico'}
                  onChange={handleInputChange}
                  className={isInputShaking('email') ? LoginCSS.shake : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Teléfono"
                  name="phoneNumber"
                  autoComplete="tel"
                  error={inputErrors.phoneNumber}
                  helperText={inputErrors.phoneNumber && 'Ingrese su número de teléfono'}
                  onChange={handleInputChange}
                  className={isInputShaking('phoneNumber') ? LoginCSS.shake : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={inputErrors.password}
                  helperText={inputErrors.password && 'Ingrese su contraseña'}
                  onChange={handleInputChange}
                  className={isInputShaking('password') ? LoginCSS.shake : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="terms"
                      required
                      checked={termsAccepted}
                      onChange={handleInputChange}
                    />
                  }
                  label="Acepto los términos y condiciones"
                />
                {registerClicked && !termsAccepted && (
                  <FormHelperText error={true}>Debe aceptar los términos y condiciones</FormHelperText>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={registerClicked}
            >
              Registrarse
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/login" variant="body2">
                  ¿Ya tienes una cuenta? Inicia sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
          {errorMessage && (
            <Typography component="p" variant="body2" color="error" className={LoginCSS.error}>
              {errorMessage}
            </Typography>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
