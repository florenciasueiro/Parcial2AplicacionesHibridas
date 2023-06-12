import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import LoginCSS from '../css/Login.module.css';
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/Check';

import useRegistro from '../Service/APIregister';

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: [
      '"Segoe UI"',
    ].join(','),
  },
});

export default function Register({ Registro }) {
  const [show201, setShow201] = useState(false);
  const [show400, setShow400] = useState(false);
  const [show409, setShow409] = useState(false);
  const [show500, setShow500] = useState(false);
  const [shakingInputs, setShakingInputs] = useState([]);

  const registro = useRegistro();

  const isInputShaking = (name) => shakingInputs.includes(name);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (value.trim() === '') {
      if (!isInputShaking(name)) {
        setShakingInputs((prevInputs) => [...prevInputs, name]);
      }
    } else {
      setShakingInputs((prevInputs) => prevInputs.filter((input) => input !== name));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const usuario = {
      nombre: data.get('name'),
      email: data.get('email'),
      mobile: data.get('tel'),
      password: data.get('password'),
    };
    console.log(usuario);

    if (usuario.nombre.trim() === '') {
      setShakingInputs((prevInputs) => [...prevInputs, 'name']);
    }
    if (usuario.email.trim() === '') {
      setShakingInputs((prevInputs) => [...prevInputs, 'email']);
    }
    // Agrega más validaciones para los otros campos requeridos aquí

    const res = registro(usuario, () => {
      console.log("usuario enviado a api.jsx");
    });

    console.log(await res);
    if (await res === 201) {
      setShow201(true);
    } else if (await res === 400) {
      setShow400(true);
    } else if (await res === 409) {
      setShow409(true);
    } else if (await res === 500) {
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
          <Avatar src="/broken-image.jpg" sx={{ width: 64, height: 64 }} />
          <Typography component="h1" variant="h5" style={{ color: "black" }}>
            Registrar
          </Typography>

          {show400 && <p className={LoginCSS.statusMessages}>Rellena los campos requeridos*</p>}
          {show409 && <p className={LoginCSS.statusMessages}>Este usuario ya está registrado.</p>}
          {show500 && <p className={LoginCSS.statusMessages}>Error Desconocido, reintentar.</p>}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <div className={LoginCSS.textfield}>
              <TextField
                InputLabelProps={{
                  style: { color: 'black' },
                }}
                InputProps={{
                  style: { color: 'black' },
                  classes: { notchedOutline: LoginCSS.fieldset }
                }}
                className={`${LoginCSS.fieldset} ${isInputShaking('name') ? LoginCSS.shakeInput : ''}`}
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nombre"
                name="name"
                autoComplete="name"
                autoFocus
                size='small'
                onChange={handleInputChange}
              />
              <TextField
                InputLabelProps={{
                  style: { color: 'black' },
                }}
                InputProps={{
                  style: { color: 'black' },
                  classes: { notchedOutline: LoginCSS.fieldset }
                }}
                className={`${LoginCSS.fieldset} ${isInputShaking('sureName') ? LoginCSS.shakeInput : ''}`}
                margin="normal"
                required
                fullWidth
                id="sureName"
                label="Apellido"
                name="sureName"
                autoComplete="sureName"
                autoFocus
                size='small'
                onChange={handleInputChange}
              />
            </div>
              <TextField
                InputLabelProps={{
                  style: { color: 'black' },
                }}
                InputProps={{
                  style: { color: 'black' },
                  classes: { notchedOutline: LoginCSS.fieldset }
                }}
                className={`${LoginCSS.fieldset} ${isInputShaking('email') ? LoginCSS.shakeInput : ''}`}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                size='small'
                onChange={handleInputChange}
              />

            <TextField
              InputLabelProps={{
                style: { color: 'black' },
              }}
              InputProps={{
                style: { color: 'black' },
                classes: { notchedOutline: LoginCSS.fieldset }
              }}
              className={`${LoginCSS.fieldset} ${isInputShaking('tel') ? LoginCSS.shakeInput : ''}`}
              margin="normal"
              required
              fullWidth
              name="tel"
              label="Telefono"
              type="tel"
              id="tel"
              autoComplete="tel"
              size='small'
              onChange={handleInputChange}
            />
            <TextField
              InputLabelProps={{
                style: { color: 'black' },
              }}
              InputProps={{
                style: { color: 'black' },
                classes: { notchedOutline: LoginCSS.fieldset }
              }}
              className={`${LoginCSS.fieldset} ${isInputShaking('password') ? LoginCSS.shakeInput : ''}`}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              size='small'
              onChange={handleInputChange}
            />
            <div className={LoginCSS.centeredContainer}>
              <FormControlLabel style={{ color: "black" }}
                control={<Checkbox value="remember" />}
                label="Acepto los términos y condiciones"
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
              className={show201 ? LoginCSS.successButton : ''}
              disabled={show201}
            >
              {show201 ? (
                <>
                  <CheckIcon className={LoginCSS.successIcon} />
                </>
              ) : (
                'Registrar'
              )}
            </Button>

            <Grid container display={'flex'}
              justifyContent="center">
              <Grid item center style={{ color: "black" }}>
                ¿Ya tienes cuenta? ‎
                <Link style={{ color: "#0645AD" }} to="/registro">
                  {"Inicia Sesión"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
