import React from "react";
import IDrink from "../../interface/IDrink";

function Card({ drink }: { drink: IDrink }) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      </div>
      <div className="cocktail-footer">
        <h3>{drink.strDrink}</h3>
        <h4>{drink.strGlass}</h4>
        <p>{drink.strAlcoholic}</p>
        <a
          className="btn btn-primary btn-details"
          href={`/cocktail/${drink.idDrink}`}
        >
          Details
        </a>
      </div>
    </article>
  );
}
export default Card;
