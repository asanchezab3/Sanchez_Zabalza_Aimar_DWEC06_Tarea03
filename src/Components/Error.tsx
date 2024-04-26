import React, { useEffect, useState } from "react";
import Nav from "./NotRutes/Nav";

//Componente principal de la app
function Error({type}) {
  const [title, setTitle] = useState<string>("Error 404");
  const [content, setContent] = useState<string>("Sorry, the page you are looking for does not exist.");
  useEffect(()=>{
    if(type === "cooktail"){
      setTitle("Ese coctel no existe");
      setContent("Vete a la página de inicio y elige uno.");
    }
  },[])

  return (
    <div>
      <Nav/>
      <section className="section about-section">
        <h1 className="section-title">{title}</h1>
        <p>{content}</p>
      </section>
    </div>
  );
}
export default Error;
