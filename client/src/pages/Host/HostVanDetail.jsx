import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader({ params }) {
  return getVans(params.vanId);
}

export default function HostVanDetail() {
  const currentVan = useLoaderData();

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
