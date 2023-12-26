import React from 'react';
import Home from "./component/Home";
import About from "./component/About";
import Product from "./component/Product";
import Sustainability from "./component/Sustainability";
import News from "./component/News";
import Deals from "./component/Deals";

const HomePage = () => {
    return (
      <div className="HomePage bg-white">
        <Home />
        <About />
        <Product />
        <Sustainability />
        <News />
        <Deals />
      </div>
    );
};

export default HomePage;