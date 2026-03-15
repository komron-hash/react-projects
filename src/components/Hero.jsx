import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1> Профессиональное <br /> обучение в IT при <br /> поддержке Банка Эсхата</h1>
        <p>Получите востребованную профессию и начните карьеру в банковской сфере</p>
        <div className="hero-buttons">
          <button className="btn primary">Начать обучение</button>
          <button className="btn secondary">Связаться с нами</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://www.shutterstock.com/image-photo/programmer-people-working-laptops-smartphones-600nw-2473384115.jpg" alt="Hero" />
      </div>
    </section>
  );
}       

