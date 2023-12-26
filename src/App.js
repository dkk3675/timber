import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage/HomePage";
import TextOnImage from "./components/TextOnImage";
import Sustainability from "./components/Sustainabilty";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App bg-white w-screen">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/sustainability-2"
            element={
              <div>
                <TextOnImage />
                <Sustainability />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
