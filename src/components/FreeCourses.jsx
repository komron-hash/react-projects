import React from "react";

export default function FreeCourses() {
  return (
    <section className="free" id="FreeCourses">
      <h2 className="free-title">Основы программирования</h2>
      <div className="free-card">
        <div className="free-image">
          <img src="https://cdn-icons-png.flaticon.com/512/2620/2620993.png"alt="Programming" />
        </div>
        <div className="free-content">
          <h3>Бесплатный старт в IT</h3>
          <p>
            Изучите базовые понятия программирования:
            переменные, условия, циклы и функции.
            Идеально для начинающих.
          </p>
          <ul>
            <li>Логика и алгоритмы</li>
            <li>Переменные и типы данных</li>
            <li>Условия и циклы</li>
            <li>Практические задания</li>
          </ul>
          <button className="free-btn">
            Начать бесплатно
          </button>
        </div>
      </div>
    </section>
  );
}