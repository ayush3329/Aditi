// Layout.js
import React from 'react';
import Header from './Header';
// import Main from './Main';
import Footer from './Footer';
import Router from './routes/Routers';

function Layout() {
  return (
    <>
        <Header></Header>
        <index><
            Router></Router>
        </index>
        <Footer></Footer>
    </>
  );
}

export default Layout;
