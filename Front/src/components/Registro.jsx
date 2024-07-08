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

const Register = ({ Registro }) => {
  const navigate = useNavigate(); // Access the navigation object
  const [show201, setShow201] = useState(false);
  const [show400, setShow400] = useState(false);
  const [show409, setShow409] = useState(false);
  const [show500, setShow500] = useState(false);
  const [shakingInputs, setShakingInputs] = useState([]);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [registerClicked, setRegisterClicked] = useState(false);
  const [inputErrors, setInputErrors] = useState({
    name: false,
    sureName: false,
    email: false,
    tel: false,
    password: false,
  });

  const registro = useRegistro();

  const isInputShaking = (name) =>
    registerClicked &&
    (name === 'name' ||
      name === 'sureName' ||
      name === 'tel' ||
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
    if (type === 'checkbox' && name === 'terms') {
      setTermsAccepted(checked);
      setRegisterClicked(false); // Agregar esta línea
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setRegisterClicked(true);
    const data = new FormData(event.currentTarget);

    const usuario = {
      nombre: data.get('name'),
      sureName: data.get('sureName'),
      email: data.get('email'),
      mobile: data.get('tel'),
      password: data.get('password'),
    };

    // Validación de campos requeridos
    const errors = {};
    if (usuario.nombre.trim() === '') {
      errors.name = true;
    }
    if (usuario.sureName.trim() === '') {
      errors.sureName = true;
    }
    if (usuario.email.trim() === '') {
      errors.email = true;
    }
    if (usuario.mobile.trim() === '') {
      errors.tel = true;
    }
    if (usuario.password.trim() === '') {
      errors.password = true;
    }

    // Agrega más validaciones para los otros campos requeridos aquí

    if (Object.keys(errors).length > 0) {
      setInputErrors(errors);
      return; // Detener el envío del formulario si hay errores
    }

    const res = await registro(usuario, () => {
      console.log("usuario enviado a api.jsx");
    });

    if (res === 201) {
      setShow201(true);
    } else if (res === 400) {
      setShow400(true);
    } else if (res === 409) {
      setShow409(true);
    } else if (res === 500) {
      setShow500(true);
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
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nombre"
                  autoFocus
                  error={inputErrors.name}
                  helperText={inputErrors.name && 'Ingrese su nombre'}
                  onChange={handleInputChange}
                  className={isInputShaking('name') ? LoginCSS.shake : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="sureName"
                  label="Apellido"
                  name="sureName"
                  autoComplete="family-name"
                  error={inputErrors.sureName}
                  helperText={inputErrors.sureName && 'Ingrese su apellido'}
                  onChange={handleInputChange}
                  className={isInputShaking('sureName') ? LoginCSS.shake : ''}
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
                  id="tel"
                  label="Teléfono"
                  name="tel"
                  autoComplete="tel"
                  error={inputErrors.tel}
                  helperText={inputErrors.tel && 'Ingrese su número de teléfono'}
                  onChange={handleInputChange}
                  className={isInputShaking('tel') ? LoginCSS.shake : ''}
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
          {show400 && (
            <Typography component="p" variant="body2" color="error" className={LoginCSS.error}>
              Por favor, verifique los datos ingresados.
            </Typography>
          )}
          {show409 && (
            <Typography component="p" variant="body2" color="error" className={LoginCSS.error}>
              Ya existe un usuario con esa dirección de correo electrónico.
            </Typography>
          )}
          {show500 && (
            <Typography component="p" variant="body2" color="error" className={LoginCSS.error}>
              Por favor, inténtelo nuevamente más tarde.
            </Typography>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
