import React from 'react';

import './Hero.scss';
import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';

// import hero_bg_full_1x from './images/hero_bg@1x.jpg';
// import hero_bg_full_2x from './images/hero_bg@2x.jpg';
//
// import hero_bg_mobile_1x from './images/hero_bg_mobile@1x.jpg';
// import hero_bg_mobile_2x from './images/hero_bg_mobile@2x.jpg';

const Hero = (props) => (
  <div className="site-hero">
    <Header>
      <Logo />
    </Header>
    <div className="site-hero__container container">
      <h1>Remote Sales Solutions</h1>
      <h2>We find best sales people in the world</h2>
      <Button className="button_big">Get started</Button>
    </div>
  </div>
);

export default Hero;
