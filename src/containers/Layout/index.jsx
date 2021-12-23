import React from 'react';
import Navbar from '../../components/Navbar';
import { ApplicationContainer } from '../../components/Common';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ApplicationContainer>{children}</ApplicationContainer>
    </>
  );
};

export default Layout;
