import React from 'react';
import { Grid, Box, Typography, Button, Container } from '@mui/material';
// import { useMediaQuery, makeStyles } from '@material-ui/core';


import { Prevent } from '../images/Vector'

// const useStyles = makeStyles((theme) => ({
//   button: {
//     [theme.breakpoints.down('sm')]: {
//       fontSize: '14px',
//       padding: '8px 16px',
//     },
//     [theme.breakpoints.up('md')]: {
//       fontSize: '16px',
//       padding: '10px 20px',
//     },
//     [theme.breakpoints.up('lg')]: {
//       fontSize: '18px',
//       padding: '12px 24px',
//     },
//   },
// }));


function TwoColumnBanner2() {
  // const classes = useStyles();
  // const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <Container>
        <Grid container  spacing={2} >
          <Grid item xs={12} md={8} sm={4} xl={4} lg={6} >
            <Box mt={8} >

              <Typography variant='h4' fontSize='48px' color='#333333' fontWeight='bold' mb={2}>
                How do we <span style={{
                  background: 'linear-gradient(to right, #000dff , #4979ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>prevent Cyber threats</span>?
              </Typography>
              <Typography variant="body1" color='#333333' mb={4}>A cyber attack typically escalates in 5 steps. It starts with the attacker conducting reconnaissance to understand vulnerabilities in an organisation’s attack surface, using an Initial Attack Vector (IAV) to gain foothold, escalating privileges, moving laterally in the organisation and ultimately trying to exfiltrate data and credentials causing economic and reputational damage to the organisation.

                By providing you information about IAVs impacting your organisation, we stop the kill chain.</Typography>

              <Button variant="outlined" sx={{ color: '#344054' }} >Get Start</Button>
              <Button variant="contained" sx={{ bgcolor: '#134ca7', ml: 2 }} >Schedule a Demo</Button>

              {/* <Button className={classes.button} variant="contained" color="primary" disabled={isSmallScreen}>
      {isSmallScreen ? 'Disabled on small screens' : 'Enabled on larger screens'}
    </Button> */}
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} md={6} xl={4} lg={6} >

            <div className='w-1/2'>
              <Prevent />
            </div>
          </Grid>



        </Grid>
      </Container>
    </>
  );
}

export default TwoColumnBanner2;


