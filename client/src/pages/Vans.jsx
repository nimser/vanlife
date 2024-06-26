import { useState, useEffect } from "react";
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
          <VanCard key={van.id} van={van} />
        ))}
      </div>
    </div>
  );
}
