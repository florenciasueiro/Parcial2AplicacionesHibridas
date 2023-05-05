import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardCSS from '../css/Card.module.css';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className={CardCSS.cards}>
      <CardActionArea>
        <CardMedia 
          className={CardCSS.image}
          component="img"
          height="140"
          image="/img/mano-que-sostiene-cubo-madera-destino.jpg"
          alt="mision y vision"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            
            Mision y vision
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
