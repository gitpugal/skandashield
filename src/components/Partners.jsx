import React from 'react'
import { Grid, Box, Typography, Button, Container } from '@mui/material';
import {Bannerimage} from '../images/Vector'



const Hundredsofpartners = () => {
  return (
    <>
    <Container>
    <Grid container  mt={5}  spacing={2} >

    <Grid  item xs={12} sm={4} md={6} xl={4} lg={6}  >
    
    <Bannerimage/>

    </Grid>

      <Grid  item xs={12} md={6} sm={4} xl={4} lg={6} >
            <Box mt={8} >
                <Typography variant="h6"  fontSize='16px' mb={1} fontWeight='bold' sx={{
                background: 'linear-gradient(to right, #000dff , #4979ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
                >PARTNERS
                </Typography>
                <Typography variant='h4' fontSize='48px' fontWeight='bold' color='#333333' mb={2}>
                Hundreds of Partners, One shared Goal: A Safer Cyber space!
                    </Typography>
                <Typography variant="body1" color="#333333" mb={4}>From start-ups to conglomerates, organizations around the globe rely on CloudSEK to protect their digital assets. And so, the CloudSEK partner ecosystem comprises of partners who share our values, allowing us to offer our customers the most advanced and the latest technology, together.</Typography>

                <Typography fontSize='20px' fontWeight='bold' color='#475467'> 100+ Diverse Global Partners, Distributors, Value-Added Vendors, and System Integrators.</Typography>
                
                <Button variant="outlined" xs={12} sm={6} sx={{color:'#344054'}} >
                View Partners
                </Button>
                <Button  variant="contained" xs={12} sm={12} sx={{bgcolor:'#134ca7',ml: 2}} >
                  Schedule a Demo</Button>
             
            </Box>
    </Grid>
    
   
    
    
    </Grid>
    </Container>
    </>
  )
}

export default Hundredsofpartners