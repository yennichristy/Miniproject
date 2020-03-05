import React from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Routes from "./components/routes/Routes";

const App = () => {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
