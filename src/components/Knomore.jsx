import React from 'react'
import {Typography, Container} from '@mui/material';
import { Box,  } from '@mui/system';

const Resources = () => {
  return (
    <>
    <Container>
   
   <Box mt={5} sx={{textAlign:'center'}}>
                <Typography variant="h6" letterSpacing={2}   mb={1} fontWeight='bold' sx={{
                background: 'linear-gradient(to right, #000dff , #4979ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                 }}
                >KNOW MORE, READ MORE
                </Typography>
                <Typography variant='h4'  color='#333333' fontWeight='bold' mb={2}>
                Resources
                </Typography>
                <Typography variant="body1" color="#6e7191" mb={4}>The Resources section is a great source of information for those looking to stay up-to-date on the latest security threats and industry trends. It includes a blog that covers topics related to cyber security, threat intelligence, white papers and reports, and a knowledge base. The blog provides insight into the latest trends, while the threat intelligence and white papers provide an in-depth understanding of the security landscape. The knowledge base is a comprehensive collection of technical documents, articles, and tips to help strengthen your security posture.</Typography>
                
            
             
   </Box>
           
            </Container>
    </>
  )
}

export default Resources