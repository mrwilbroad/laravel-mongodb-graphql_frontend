import React from "react";
import "./style/scss/app.scss";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NavbarComponent from "./component/service/NavbarComponent";
import "@fortawesome/fontawesome-free/css/all.min.css"

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
    </>
  );
}

export default App;
