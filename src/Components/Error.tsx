import React from "react";
import Nav from "./NotRutes/Nav";

//Componente principal de la app
function Error() {
  return (
    <div>
      <Nav/>
      <section className="section about-section">
        <h1 className="section-title">Error 404</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </section>
    </div>
  );
}
export default Error;
