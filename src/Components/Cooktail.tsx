import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./NotRutes/Nav";
import IDrink from "../interface/IDrink";
import Spinner from "./NotRutes/Spinner";

function Cooktail() {
  const [drink, setDrink] = useState<IDrink>();
  const [load, setLoad] = useState<boolean>(true);
  // Obtenemos el parámetro de la URL llamado "id"
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((datos) => {
        setDrink(datos.drinks[0]);
      })
      .catch((err) => {
        console.error(err);
        window.location.href = "/error-cooktail";
      }) // En caso de error, lo mostramos en la consola.
      .finally(() => setLoad(false));
  }, []);

  return (
    <div>
      <Nav />
      {load ? (
        <Spinner />
      ) : (
        <section className="section cocktail-section">
          <a className="btn btn-primary" href="/">
            back home
          </a>
          <h1 className="section-title">{drink?.strDrink}</h1>
          <div className="drink">
            <img
              src={drink?.strDrinkThumb}
              alt={drink?.strDrink}
              className="drink-detail"
            />
            <div className="drink-info">
              <p>
                <span className="drink-data">name :</span> {drink?.strDrink}
              </p>
              <p>
                <span className="drink-data">category :</span>{" "}
                {drink?.strCategory}
              </p>
              <p>
                <span className="drink-data">info :</span> {drink?.strAlcoholic}
              </p>
              <p>
                <span className="drink-data">glass :</span> {drink?.strGlass}
              </p>
              <p>
                <span className="drink-data">instructons :</span>{" "}
                {drink?.strInstructions}
              </p>
              <p>
                <span className="drink-data">ingredients :</span>
                <span> {drink?.strIngredient1}</span>
                <span> {drink?.strIngredient2}</span>
                <span> {drink?.strIngredient3}</span>
                <span> {drink?.strIngredient4}</span>
                <span> {drink?.strIngredient5}</span>
                <span> {drink?.strIngredient6}</span>
                <span> {drink?.strIngredient7}</span>
                <span> {drink?.strIngredient8}</span>
                <span> {drink?.strIngredient9}</span>
                <span> {drink?.strIngredient10}</span>
                <span> {drink?.strIngredient11}</span>
                <span> {drink?.strIngredient12}</span>
                <span> {drink?.strIngredient13}</span>
                <span> {drink?.strIngredient14}</span>
                <span> {drink?.strIngredient15}</span>
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
export default Cooktail;
