import React from "react";

export default function Header({onRegister}) {
  const knopka =(id) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({behavior: "smooth"});
  }

  return(
    <header className="header">
      <div className="div">Eskhata-Academy</div>
      <nav className="nav">
      <button onClick={() => knopka("courses")}>Курсы</button>
      <button className="green" onClick={() => knopka("FreeCourses")}>Бесплатные курсы</button>
      <button onClick={() => knopka("about")}>О нас</button>
      <button onClick={() => knopka("footer")}>Контакты</button>
      </nav>
      <button className="btn" onClick={onRegister}>Регистрация</button>
   </header>
  )
}