/** @jsx jsx */
import { jsx } from 'theme-ui';
import scrollTo from 'gatsby-plugin-smoothscroll';

import './Footer.scss';

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__container container">
      <p>RSS © {new Date().getFullYear()}</p>
      <a className="site-footer__scroll-top" onClick={() => scrollTo('#top')}>
        Go to Top
      </a>
    </div>
  </footer>
);

export default Footer;
