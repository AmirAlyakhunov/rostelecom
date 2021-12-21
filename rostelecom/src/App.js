import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./pageElements/header/header";
import AppRouter from "./appRouter/appRouter";
import Footer from "./pageElements/footer/footer";

function App() {
  return (
      <BrowserRouter>
        <Header/>
          <AppRouter/>
        <Footer/>
      </BrowserRouter>

  );
}

export default App;
