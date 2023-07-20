import React from 'react';
import { Grid, Typography, Avatar, IconButton,  Box  } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import Container from '@mui/material/Container';




const FooterEnd = () => {
  return (
    <>
    <Container>
    <Grid container  mt={5}  spacing={2} >
      <Grid  item xs={12} sm={4} xl={4} >
      <Box display="flex" justifyContent="center">
        <Typography>LOGO</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
      <Box display="flex" justifyContent="center">
        <Typography textAlign="center" color='#6e7191' fontSize='18px'>A contextual AI company that predicts Cyber Threats.</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
      <Box display="flex" justifyContent="center">
        <IconButton>
          <Box color='#4a3aff'>
          <Facebook />
          </Box>
        </IconButton>
        <IconButton>
        <Box color='#4a3aff'>
          <Twitter />
          </Box>
        </IconButton>
        <IconButton>
        <Box color='#4a3aff'>
          <Instagram />
          </Box>
        </IconButton>
        <IconButton>
        <Box color='#4a3aff'>
          <LinkedIn />
          </Box>
        </IconButton>
        </Box>
      </Grid>
    </Grid>


    </Container>
    </>
  );
};

export default FooterEnd;
