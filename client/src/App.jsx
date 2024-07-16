import "./App.css";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { checkAuth } from "./api";

export function loader() {
  return checkAuth();
}

function App() {
  const loggedIn = useLoaderData();
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
