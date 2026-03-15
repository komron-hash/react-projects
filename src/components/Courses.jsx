import React from "react";

const courses = [
    {title: "Основы компютера программирования", desc: "Дата уточняется", icon:"👨‍💻"},
    {title: "Backend разработчик на на PHP", desc: "Дата уточняется", icon: "🖥"},
    {title: "Quality Assurance специалист", desc: "Дата уточняется", icon: "🔍"},
    {title: "Основы программирования для девушек", desc: "Дата уточняется", icon: "🥉"},
    {title: "Backend разработчик на C#", desc: "Дата уточняется", icon: "⚙️"},
    {title: "Backend разработчик на GO", desc: "Дата уточняется", icon: "🚀"},
];

export default function Courses() {
  return (
    <section className="courses" id="courses">
      <h2>Наши Курсы</h2>
      <div className="courses-grid">
        {courses.map((c, i) => (
          <div key={i} className="courses-card">
            <div className="courses-icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <button className="btn">Подробнее</button>
          </div>
        ))}
      </div>
    </section>
  );
}