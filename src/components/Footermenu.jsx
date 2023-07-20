import React from 'react';

import Container from '@mui/material/Container';
import { Grid, Typography, Avatar, IconButton,  Box  } from '@mui/material';


  const customStyle  = {
    lineHeight: '40px',  fontSize: '18px',color:'#50536b'
  };

const FooterMenu = () => {
  return (
    <>
  <Container>

  



    <Grid container spacing={2}  >

      <Grid item xs={6} sm={3} >
        
        <Typography variant="h5" color='#211f54' mt={5} mb={2} fontWeight='600' fontSize= '22px'>Product</Typography>
       
       <Typography style={customStyle}>XVigil</Typography>
       <Typography style={customStyle}>SVigil</Typography>
       <Typography style={customStyle}>BeVigil</Typography>
       
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant="h5" color='#211f54' mt={5} mb={2} fontWeight='bold'>Company</Typography>
        <Typography style={customStyle}>About Us</Typography>
        <Typography style={customStyle}>Customers</Typography>
        <Typography style={customStyle}>Partners</Typography>
        <Typography style={customStyle}>Reviews</Typography>
        <Typography style={customStyle}>Privacy</Typography>
        <Typography style={customStyle}>GDPR</Typography>
        <Typography style={customStyle}>Contact us</Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant="h5" color='#211f54' mt={5} mb={2} fontWeight='bold'>Careers</Typography>
       <Typography style={customStyle}>Life at CloudSEK</Typography>
       <Typography style={customStyle}>Threat Intelligence</Typography>
       <Typography style={customStyle}>Whitepapers and Reports</Typography>
       <Typography style={customStyle}>Knowledge Base</Typography>
      </Grid>
      <Grid item xs={6} sm={3} >
  
        <Typography variant="h5" color='#211f54' mt={5} mb={2} fontWeight='bold'>Resources</Typography>
        <Typography style={customStyle} >Blogs</Typography>
       <Typography style={customStyle}>Threat Intelligence</Typography>
       <Typography style={customStyle}>Whitepapers and Reports</Typography>
       <Typography style={customStyle}>Knowledge Base</Typography>

      </Grid>

    </Grid>
  
    <Typography  color="#6e7191" textAlign="center" mt={5} mb={5} fontSize= '18px' >Copyright © 2023 | All Rights  Reserved</Typography>
    </Container> </>
  );
};

export default FooterMenu;
