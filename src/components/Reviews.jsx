import React from 'react'
import {Typography, Button} from '@mui/material';
import { Box, Container } from '@mui/system';

const Customerreview = () => {
  return (
    <>
    <Container>
   
   <Box mt={5} sx={{textAlign:'center'}}>
                <Typography variant="h6" letterSpacing={2}   mb={1} fontWeight='bold' sx={{
                background: 'linear-gradient(to right, #000dff , #4979ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                 }}
                >REVIEWS
                </Typography>
                <Typography variant='h4'  color='#333333' fontWeight='bold' mb={2}>
                Our Precious Customers' Reviews
                </Typography>
                <Typography variant="body1" color="#6e7191" mb={4}>Our customers speaking about the value they uncovered with CloudSEK solutions...</Typography>
                <Button variant="outlined" xs={12} sm={6} sx={{color:'#344054'}} >
                Request a Demo
                </Button>
                <Button  variant="contained" xs={12} sm={12} sx={{bgcolor:'#134ca7',ml: 2}} >
                Read More Reviews</Button>
                
            
             
   </Box>
           
            </Container>
    </>
  )
}

export default Customerreview