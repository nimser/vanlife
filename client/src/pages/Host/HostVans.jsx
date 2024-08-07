import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";

export function loader() {
  return getHostVans();
}

export default function HostVans() {
  const vans = useLoaderData();

  const hostVansEls = vans.map((van) => (
    <Link
      to={`/host/vans/${van.id}`}
      key={van.id}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={van.name} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {vans.length > 0 ? (
          <section>{hostVansEls}</section>
        ) : (
          <>
            <h2>It's quite empty here...</h2>
            <h3>You should probably add a van.</h3>
          </>
        )}
      </div>
    </section>
  );
}
