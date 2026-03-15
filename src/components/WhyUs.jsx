import React from "react";

const whyus = [
    {title: "Ментори-практики", desc: "Эксперты из банковской и IT-индустрии.", icon: "👨‍🏫",},
    {title: "Практика", desc: "Работа над реальными кейсами и проектами.", icon: "💼",},
    {title: "Сертификат", desc: "Официальный сертификат от Eskhata Academy.", icon: "📜",},
];
export default function WhyUs() {
  return (
    <section className="whyus" id="about">
      <h2>Почему выбирают нас</h2>
      <div className="whyus-grid">
        {whyus.map((w, i) => (
          <div key={i} className="whyus-card">
            <div className="whyus-icon">{w.icon}</div>
            <h3>{w.title}</h3>
            <p>{w.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}