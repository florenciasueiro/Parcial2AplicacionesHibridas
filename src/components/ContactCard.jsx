import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from 'react';
import Contactos from '../Service/holdedConection';



const Contador = () => {
  const [contador, setContador]= useState(0);
  return <button onClick={()=> setContador(contador + 1)}>{contador} Contador</button>;
}




export default function ContactCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mision y vision
          </Typography>
          <Contactos/>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            <Contador/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
