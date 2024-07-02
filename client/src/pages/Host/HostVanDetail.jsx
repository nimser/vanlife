import { useEffect, useState } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";

export default function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState(0);
  const hostId = 2; // FIXME retrieve hostId from auth context
  const { van_id: vanId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/hosts/${hostId}/vans/${vanId}`
        );
        const data = await res.json();
        setCurrentVan(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [vanId]);

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} alt={currentVan.name} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        <nav>
          <NavLink
            to="."
            end
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}
