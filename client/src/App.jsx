import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [auth, setAuth] = useState({});

  return (
    <>
      <Header />
      <main>
        <Outlet context={{ auth, setAuth }} />
      </main>
      <Footer />
    </>
  );
}

export default App;
