import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { Container, color } from '@mui/system';

const CardDesign1 = () => {
  const cardData = [
    {
      title: 'Cyber Threat Intelligence',
      content: 'Cyber Threat monitoring includes monitoring of surface, dark and deep web for credential disclosures, data leaks, card leaks, frauds, scams and more.',
      button:'Read More'
    },
    {
      title: 'Brand Threat Monitoring',
      content: "Continual brand scan helps to combat fake brand pages, rogue applications and impersonating domains that could harm an organization's brand image",
      button:'Read More'
    },
    {
      title: 'Attack Surface Monitoring',
      content: 'We monitor 8+ attack surfaces and comprehensively fingerprint an organization’s digital assets.',
      button:'Read More'
    },
    {
        title: 'Deep and Dark Web Monitoring',
        content: 'We scan freely available as well as premium sources (i.e. behind login wall forums /marketplaces /dark sites) to provide deep and dark web coverage.',
        button:'Read More'
      },
      {
        title: 'Data Leaks Monitoring',
        content: 'Prevent leak of sensitive information like code repositories, documents, credentials, debit/credit card details etc with comprehensive data leak monitoring.',
        button:'Read More'
      },
      {
        title: 'Infrastructure Monitoring',
        content: "Comprehensive monitoring of your organisation's infrastructure including web apps, asset inventory etc and detection of vulnerabilities and misconfigurations.",
        button:'Read More'
      },
  ];

  return (
    <>
    <Container>
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item key={index} xs={12} sm={4} >
          <Card sx={{backgroundColor: "#F8F8FD", textAlign: "center"}}>
            <CardContent>
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="body1" sx={{paddingX: "10px", lineHeight:"25px", marginY: "20px"}}>{card.content}</Typography>
              <Button  sx={{borderColor: "#B7BEF8", border: 1, paddingX: "15px", borderRadius: "10px", backgroundColor: "transparent", color:"#134CA7"}} >{card.button}</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Container>
    </>
  );
};

export default CardDesign1;
