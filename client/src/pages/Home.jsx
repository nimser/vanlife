import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <h1>You got the travel plans. We got the travel vans.</h1>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link className="link-button" to="/vans">
        Find your van
      </Link>
    </section>
  );
}

export default Home;
