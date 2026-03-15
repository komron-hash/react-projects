import React from "react";

export default function Olympiad() {
  return (
    <section className="olympiad">
      <div className="olympiad-container">
        
        <div className="olympiad-hero">
          <h1> Образовательная IT-Олимпиада 2026</h1>
          <p> От Банк Эсхата — учись, решай реальные кейсы и получи шанс на стажировку</p>
          <button className="primary-btn">Принять участие</button>
        </div>
        <div className="olympiad-info">
          <h2>Как проходит олимпиада?</h2>
          <div className="steps">
            <div className="step">
              <h3>1️⃣ Обучение</h3>
              <p>Видеоуроки, PDF материалы и пробные тесты.</p>
            </div>
            <div className="step">
              <h3>2️⃣ Онлайн тест</h3>
              <p>Тестирование знаний по выбранному направлению.</p>
            </div>
            <div className="step">
              <h3>3️⃣ Практическое задание</h3>
              <p>Решение реального банковского кейса.</p>
            </div>
            <div className="step">
              <h3>4️⃣ Финал</h3>
              <p>Презентация проекта и выбор победителей.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}