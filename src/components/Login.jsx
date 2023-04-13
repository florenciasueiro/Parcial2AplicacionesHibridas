import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useContactos from "../service/holdedConection";



const theme = createTheme();










export default function SignIn({Contactos}) {
  const arrayVacio = (arr) => !Array.isArray(arr) || arr.length === 0;
 
  const usuario= JSON.parse(sessionStorage.getItem('user'));
  // if(usuario!=null || !usuario==[]){
  // console.log(usuario[0].name)}
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError]= useState(false);
  const contactos = useContactos();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    contactos(email, password);
    if(!usuario || Object.keys(usuario).length==0){
      setTimeout(() => {
        setShowError(true);
      }, 1000);
    }
    // window.location.reload();
  };
    // const data = new FormData(event.currentTarget);
  
    // const credenciales={
    //   email: data.get('email'),
    //   password: data.get('password'),
    // };
    // console.log(credenciales);
    // Contactos(credenciales)
    const handleLogout = () => {
      sessionStorage.clear();
      window.location.reload();
  }
if(usuario==null || Object.keys(usuario).length==0) {
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
            <Typography component="h1" variant="h5">
              Inicia Sesión
            </Typography>
            {showError && <p>Email o contraseña inválidos.</p>}
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recuerdame"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                
  
                Iniciar Sesión
                
              </Button>
              <Grid container
              justifyContent="center">
                <Grid item xs>
                  <Link href="#" variant="body2">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Grid>
                <Grid item>
                ¿No tienes cuenta? 
                  <Link to="/registrar">
                    {"Registrate"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }

// else if(usuario==[] || Object.keys(usuario).length==0) {
//     return (
//       <ThemeProvider theme={theme}>
//         <Container component="main" maxWidth="xs">
//           <CssBaseline />
//           <Box
//             sx={{
//               marginTop: 8,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Typography component="h1" variant="h5">
//               Inicia Sesión
//             </Typography>
//             <p>Email o contraseña invalidos.</p>
//             <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//                 value={email}
//                 onChange={(e)=> setEmail(e.target.value)}
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 value={password}
//                 onChange={(e)=> setPassword(e.target.value)}
//               />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Recuerdame"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 >
                
  
//                 Iniciar Sesión
                
//               </Button>
//               <Grid container
//               justifyContent="center">
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     ¿Olvidaste tu contraseña?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                 ¿No tienes cuenta? 
//                   <Link to="/registrar">
//                     {"Registrate"}
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Container>
//       </ThemeProvider>
//     );
//   }

else{
  
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
          <Typography component="h1" variant="h5">
            Tu cuenta
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuerdame"
            /> */}
            <h5>nombre: {usuario[0].name}</h5>
            <h5>email: {usuario[0].email}</h5>
            <h5>Telefono: {usuario[0].mobile}</h5>
            <h5>id: {usuario[0].id}</h5>
            <h5>productos:</h5>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>handleLogout()}>

              Cerrar Sesión
              
            </Button>
            {/* <Grid container
            justifyContent="center">
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
              ¿No tienes cuenta? 
                <Link to="/registrar">
                  {"Registrate"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );

}
}

