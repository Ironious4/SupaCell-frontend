import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [heros, setHeros] = useState([]);

  useEffect(() => {
    fetch("https://supacell-backend.onrender.com/heroes")
      .then((r) => r.json())
      .then(setHeros);
  }, []);

  return (
    <section>
      <h2>Heroes</h2>
      <ul>
        {heros.map((hero) => (
          <li key={hero.id}>
            <Link to={`/heroes/${hero.id}`}>{hero.super_name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
