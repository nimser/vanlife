import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setVans] = useState([]);
  const hostId = "2"; // FIXME retrieve this from the context after being authed

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/hosts/${hostId}/vans`
        );
        const data = await res.json();
        setVans(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

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
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
