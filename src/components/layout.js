/** @jsx jsx */
import { jsx } from 'theme-ui';
import classNames from 'classnames';

import '../assets/scss/style.scss';
import Footer from './Footer/Footer';


const Layout = ({ children, className }) => {

  return (
    <div className="primary-container">
      <main className={classNames('main', className)}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
