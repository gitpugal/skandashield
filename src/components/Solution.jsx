import React from 'react'
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';


const Powerful = () => {
  return (
    <>
      <Container>
        <Box mt={5} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" letterSpacing={2} mb={1} fontWeight='bold' sx={{
            background: 'linear-gradient(to right, #000dff , #4979ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          >SOLUTIONS
          </Typography>
          <Typography variant='h4' color='#333333' fontWeight='bold' mb={2}>
            Powerful Modules, <span style={{
              background: 'linear-gradient(to right, #4300ff , #000fb3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Powerful Solutions</span>
          </Typography>
          <Typography variant="body1" color="#6e7191" mb={4}>Across verticals, some of the world’s largest and most innovative firms find our solutions perfect for their needs with over 170 use cases.</Typography>
        </Box>
      </Container>
    </>
  )
}

export default Powerful