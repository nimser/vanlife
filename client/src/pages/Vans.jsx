import { Link, useLoaderData } from "react-router-dom";
import VanCard from "../components/VanCard";
import "./vans.css";
import { getVans } from "../api";

export function loader() {
  return getVans();
}

export default function Vans() {
  const vans = useLoaderData();

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
