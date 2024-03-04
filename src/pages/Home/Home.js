import React from "react";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import ProductListing from "../../components/ProductListing/ProductListing";

const Home = () => {
  return (
    <div>
      <h3>Home page</h3>
      <Header />
      <Sidebar />
      <ProductListing />
      <Footer />
    </div>
  );
};

export default Home;
