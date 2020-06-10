import React from 'react';
import NavigationMenu from '../components/NavigationMenu/NavigationMenu';
import FooterBlock from '../components/FooterBlock/FooterBlock';

const Layout = ({ children }) => {
  return (
    <>
      <NavigationMenu />
      <div style={{ margin: '20px 0', flexGrow: '1' }}>{children}</div>
      <FooterBlock />
    </>
  );
};

export default Layout;
