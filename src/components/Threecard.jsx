import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { Container, color } from '@mui/system';

const CardDesign = () => {
  const cardData = [
    {
      title: 'Card 1',
      content: 'Digital Risk Protection platform which gives Initial Attack Vector Protection for employees and customers.',
      button:'Learn More About Xvigil'
    },
    {
      title: 'Card 2',
      content: 'Software and Supply chain Monitoring providing Initial Attack Vector Protection for Software Supply Chain risks.',
      button:'Learn More About Xvigil'
    },
    {
      title: 'Card 3',
      content: 'Instant Security Score for any Android Mobile App on your phone. Search for any app to get an instant risk score.',
      button:'Learn More About Xvigil'
    },
  ];

  return (
    <>
    <Container>
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item key={index} xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="body1">{card.content}</Typography>
              <Button variant='contained' sx={{bgcolor:'#134ca7'}} >{card.button}</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Container>
    </>
  );
};

export default CardDesign;
