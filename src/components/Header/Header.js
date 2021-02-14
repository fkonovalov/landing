/** @jsx jsx */
import { jsx } from 'theme-ui';

import './Header.scss';

const Header = ({ children }) => (
  <header className="site-header">
    <div className="site-header__container container">{children}</div>
  </header>
);

export default Header;
