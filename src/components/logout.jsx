import React from "react";
import Button from '@mui/material/Button';


function logout(){
    const usuario= sessionStorage.getItem('user');
    const handleClick = () => {
        sessionStorage.clear();
        window.location.reload();
    }
    if(usuario==null){
      console.log("No usuario");
    return (
      <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Iniciar Sesión
    </Button>
    );
  }
  else{
      
      return(
      <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={()=>handleClick()}
    >
      Cerrar Sesión
    </Button>
      )
  }
  }

export default logout;