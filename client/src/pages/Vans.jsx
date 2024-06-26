import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VanCard from "../components/VanCard";
import "./vans.css";

export default function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/vans`);
      setVans(await response.json());
    })();
  }, []);

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">
        {vans.map((van) => (
          <Link key={van.id} to={`/vans/${van.id}`}>
            <VanCard van={van} />
          </Link>
        ))}
      </div>
    </div>
  );
}
