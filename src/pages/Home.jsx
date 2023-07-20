import React from 'react'

import ResponsiveAppBar from '../components/Header'
import FooterEnd from '../components/Footer'
import FooterMenu from '../components/Footermenu'
import Bannertop from '../components/Banner'
import TwoColumnBanner from '../components/Banner'
import TwoColumnBanner2 from '../components/Preventcyber'
import Award from '../components/Product'
import CardDesign from '../components/Threecard'
import Powerful from '../components/Solution'
import CardDesign1 from '../components/Sixcard'
import Customerreview from '../components/Reviews'
import Resources from '../components/Knomore'
import Twocard from '../components/Twocard'
import Integrations from '../components/Integrations'
import Hundredsofpartners from '../components/Partners'
import CustomCarousel from '../components/CustomCarousel'
import ScrollToTopButton from '../components/ScrollToTopButton'
import { Bannerimage } from '../images/Vector';
import { Prevent } from '../images/Vector';
import BgAnimation from '../Animations/BgAnimation';
import { motion, useScroll, useSpring } from "framer-motion"



function Home() {
  // const { scrollYProgress } = useScroll()
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className='w-screen overflow-x-hidden'>
      <motion.div className="progress-bar bg-blue-600 z-50" style={{ scaleX }} />
      <ResponsiveAppBar />
      <TwoColumnBanner
        titleStart="We "
        textAnimation={true}
        highlightedText="Predict"
        titleEnd=" Cyber Threats"
        description="At CloudSEK, we combine the power of Cyber Intelligence, Brand Monitoring, 
        Attack Surface Monitoring, Infrastructure Monitoring and Supply Chain Intelligence to give 
        context to our customers’ digital risks."
        primaryButton="SCHEDULE A DEMO"
        secondaryButton="Learn more"
        imageSrc={<Bannerimage />}
      />
      <CustomCarousel title={"Our Services"} />

      <TwoColumnBanner
        titleStart="How do we "
        textAnimation={false}
        highlightedText="prevent Cyber threats"
        titleEnd=" ?"
        description="A cyber attack typically escalates in 5 steps. It starts with the attacker conducting 
        reconnaissance to understand vulnerabilities in an organisation’s attack surface, using an Initial 
        Attack Vector (IAV) to gain foothold, escalating privileges, moving laterally in the organisation and 
        ultimately trying to exfiltrate data and credentials causing economic and reputational damage to the organisation.
        By providing you information about IAVs impacting your organisation, we stop the kill chain."
        primaryButton="SCHEDULE A DEMO"
        secondaryButton="Get Started"
        imageSrc={<Prevent />}
      />
      {/* <TwoColumnBanner2 /> */}
      <Award />
      <CardDesign />
      <Powerful />
      <CardDesign1 />
      <Customerreview />
      <Resources />
      <Twocard />
      <Integrations />
      <Hundredsofpartners />
      <FooterEnd />
      <FooterMenu />
      <ScrollToTopButton />
    </div>
  )
}

export default Home