import React from 'react';
import { Grid, Box, Typography, Button, Container } from '@mui/material';
import { motion } from "framer-motion";

import BgAnimation from '../Animations/BgAnimation';
import { Tilt } from 'react-tilt';
import TextTransition, { presets } from 'react-text-transition';


const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
}



function TwoColumnBanner(props) {
  const [index, setIndex] = React.useState(0);
  const TEXTS = ['Monitor', 'Analyze', 'Predict'];

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1500,
    );
    return () => clearTimeout(intervalId);
  }, []);



  return (
    // <>
    <Container className='h-fit lg:h-screen mt-5 md:mt-5 pb-14 overflow-x-hidden flex flex-col justify-center items-center'>
      <Grid container spacing={2} >
        <Grid item xs={12} md={6} sm={12} xl={4} lg={6} >
          <Box mt={2} px={2}>

            <Typography variant='h4' fontSize='48px' fontWeight='bold' color='#333333' mb={2}>
              {props.titleStart}
              {props.textAnimation == true ?
                <TextTransition className="gradient-text text-blue-700 font-bold" springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                :
                <span style={{
                  background: 'linear-gradient(to right, #000dff , #4979ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}> {props.highlightedText}</span>
              }
              {props.titleEnd}
            </Typography>
            <Typography variant="body1" color="#333333" mb={2}>{props.description}</Typography>

            <div className='flex flex-row w-full md:w-[90%] md:mt-10'>
              <Button
                className='flex-1 hover:bg-gray-800'
                sx={{
                  border: 2,
                  borderColor: '#134ca7',
                  color: '#344054',
                  fontWeight: { xs: 500, sm: 600 },
                  fontSize: { xs: "14px", sm: "14px" },
                  p: { xs: "15px", sm: "15px 24px" },
                }} >
                {props.secondaryButton}
              </Button>
              <Button variant="contained"
                className='hover:bg-blue-900 flex-1'
                sx={{
                  bgcolor: '#134ca7',
                  marginLeft: "15px",
                  fontWeight: { xs: 500, sm: 600 },
                  fontSize: { xs: "14px", sm: "14px" },
                  p: { xs: "12px", sm: "15px 20px" },
                }}>
                {props.primaryButton}</Button>
            </div>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} xl={4} lg={6}  >
          <Tilt options={defaultOptions} >
            <motion.div
              animate={{
                y: [-15, 10, -10],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: 'easeInOut'
                },
              }}
            >

              <div className='pt-10 '>
                {/* <BgAnimation /> */}
                {props.imageSrc}
              </div>
            </motion.div>
          </Tilt>

        </Grid>



      </Grid>
    </Container >
    // </>
  );
}

export default TwoColumnBanner;



