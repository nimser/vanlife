import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VanCard from "../components/VanCard";
import "./vans.css";
import { getVans } from "../api";

export default function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getVans();
      setVans(data);
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
