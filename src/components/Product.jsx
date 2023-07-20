import React from 'react'
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import CardDesign from './Threecard';


const Award = () => {
  return (
    <div className="h-fit mb-10 relative">
      <Container>
        <Box mt={5} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" letterSpacing={2} mb={1} fontWeight='bold' sx={{
            background: 'linear-gradient(to right, #000dff , #4979ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          >PRODUCT
          </Typography>
          <Typography variant='h4' color='#333333' fontWeight='bold' mb={2}>
            Secure your organisation with our <span style={{
              background: 'linear-gradient(to right, #4300ff , #000fb3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Award winning Products</span>?
          </Typography>
          <Typography variant="body1" color="#6e7191" mb={10} className='w-full md:w-1/2 pb-10' sx={{ margin: "auto" }}>CloudSEK Platform is a no-code platform that powers our products with predictive threat analytic capabilities.</Typography>
        </Box>
      </Container>
      <CardDesign />
    </div>
  )
}

export default Award