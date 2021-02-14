import React from 'react';
import { Link } from 'gatsby'

import './Hero.scss';
import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';

const Hero = () => (
  <div id="top" className="site-hero">
    <Header>
      <Logo />
    </Header>
    <div className="site-hero__container container">
      <h1>Remote Sales Solutions</h1>
      <h2>We find best sales people in the world</h2>

      <Link
        to="/modal/"
        state={{
          modal: true,
        }}
      >
        <Button className="button_big">Get started</Button>
      </Link>
    </div>
  </div>
);

export default Hero;
