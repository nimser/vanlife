import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getVans } from "../api";

export default function VanDetail() {
  const { id } = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getVans(id);
      setVan(data);
    })();
  }, [id]);

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} alt={van.name} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button type="button" className="link-button">
            Rent this van
          </button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
