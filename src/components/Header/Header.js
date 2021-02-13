/** @jsx jsx */
import { jsx } from 'theme-ui';

import './Header.scss';

const Header = ({ children }) => (
  <header
    className="site-header"
    sx={{
      bg: 'primary',
    }}
  >
    {children}
  </header>
);

export default Header;
