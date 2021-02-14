/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import classNames from 'classnames';

// import Header from './Header/Header';
// import Logo from './Logo/Logo';
// import Navigation from './navigation';

import '../assets/scss/style.scss';
import Footer from './Footer/Footer';
// import Theme from '../components/theme';


const Layout = ({ children, className }) => {

  return (
    <div className="primary-container">
      <main className={classNames('main', className)}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
//
// const layoutStyle = {
//   theme: {
//     display: ['none', 'none', 'none', 'block'],
//   },
// };
