import React, { useEffect, useState } from "react";
import Nav from "./NotRutes/Nav";
import Spinner from "./NotRutes/Spinner";
import IDrink from "../interface/IDrink";
import Card from "./NotRutes/Card";

function Home() {
  const [drinks, setDrinks] = useState<IDrink[]>([]);
  const [load, setLoad] = useState<boolean>(true);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((datos) => {
        setDrinks(datos.drinks);
      })

      .catch((err) => console.error(err)) // En caso de error, lo mostramos en la consola.
      .finally(() => setLoad(false));
  }, []);

  return (
    <div id="root">
      <main>
        <Nav />
        {load ? (
          <Spinner />
        ) : (
          <section>
            <h2 className="section-title">cocktails</h2>
            <div className="cocktails-center">
              {/* Mapa para mostar las bebidas */}
              {drinks.map((drink: IDrink, key) => {
                return <Card drink={drink} key={key} />;
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
export default Home;
