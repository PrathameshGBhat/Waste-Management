import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import  { Toaster } from 'react-hot-toast';
const Layout = (porps) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "85vh" }}>
      <Toaster />
        {porps.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
