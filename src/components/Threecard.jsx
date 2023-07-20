import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { Container, color } from '@mui/system';

const CardDesign = () => {
  const cardData = [
    {
      title: 'Card 1',
      content: 'Digital Risk Protection platform which gives Initial Attack Vector Protection for employees and customers.',
      button: 'Learn More About Xvigil'
    },
    {
      title: 'Card 2',
      content: 'Software and Supply chain Monitoring providing Initial Attack Vector Protection for Software Supply Chain risks.',
      button: 'Learn More About Xvigil'
    },
    {
      title: 'Card 3',
      content: 'Instant Security Score for any Android Mobile App on your phone. Search for any app to get an instant risk score.',
      button: 'Learn More About Xvigil'
    },
  ];

  return (
    <Container >
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={4} sx={{margin: "auto"}}>
            <div className='w-[90%] text-center mx-auto rounded-xl h-full flex flex-col gap-5 py-16 px-10 shadow-2xl'>
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="body1">{card.content}</Typography>
              <Button variant='contained' sx={{ bgcolor: '#134ca7', width: "80%", margin: "auto" }} >{card.button}</Button>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardDesign;
