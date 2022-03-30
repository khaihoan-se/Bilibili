import React from 'react';
import NavBar from '../partials/navbar/NarBar'

const BaseLayout = ({ children }) => {
  return (
    <div className='layout'>
        <NavBar />
        {children}
    </div>
  );
}

export default BaseLayout;
