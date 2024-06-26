export default function VanCard({ van }) {
  return (
    <div key={van.id} className="van-tile">
      <img src={van.imageUrl} alt={`Cool-looking van ${van.id}`} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  );
}
