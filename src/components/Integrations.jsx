import React from 'react'
import { Grid, Box, Typography, Button, Container } from '@mui/material';


const Integrations = () => {
  return (
    <>
    <Container>
    <Grid container  mt={5}  spacing={2} >
      <Grid  item xs={12} md={6} sm={4} xl={4} lg={6} >
            <Box mt={8} >
                <Typography variant="h6"  fontSize='16px' mb={1} fontWeight='bold' sx={{
                background: 'linear-gradient(to right, #000dff , #4979ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
                >INTEGRATIONS
                </Typography>
                <Typography variant='h4' fontSize='48px' fontWeight='bold' color='#333333' mb={2}>
                Don't Replace;<span style={{   background: 'linear-gradient(to right, #000dff , #4979ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'}}>Integrate</span> 
                    </Typography>
                <Typography variant="body1" color="#333333" mb={4}>CloudSEK's integration mechanism is a set of APIs that customers can use to integrate our IAV intelligence into their existing tools and solutions. Through this, we envision a future where threats are resolved and remediated automatically.</Typography>
                
                <Button variant="outlined" xs={12} sm={6} sx={{color:'#344054'}} >
                View all Integrations
                </Button>
                <Button  variant="contained" xs={12} sm={12} sx={{bgcolor:'#134ca7',ml: 2}} >
                Request a Demo</Button>
             
            </Box>
    </Grid>
    
    <Grid  item xs={12} sm={4} md={6} xl={4} lg={6}  >
            <Box mt={8} >
              
            </Box>
    
    </Grid>
    
    
    
    </Grid>
    </Container>
    </>
  )
}

export default Integrations