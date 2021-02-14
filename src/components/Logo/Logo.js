import React from 'react';
import { Link } from 'gatsby';

import './Logo.scss';
import SiteLogo from './images/Logo.svg'
const Logo = (props) => (
  <div className="site-logo">
    <Link to="/">
      <img src={SiteLogo} alt="Logo"/>
    </Link>
  </div>
);

export default Logo;
