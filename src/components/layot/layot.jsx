import Header from 'components/header/header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const LayoutHome = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutHome;
