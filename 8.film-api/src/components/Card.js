import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';

export default function ActionAreaCard({image,title,year,score,id}) {
    const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 250 }} onClick={() => navigate(`/anime/${id}`)} key={id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            {year},{score}
          </Typography>
          <hr />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Release : {year} | Rate : {score}
          </Typography>
        </CardContent>
        
      </CardActionArea>
    </Card>

  );
}
