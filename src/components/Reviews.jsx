import React from "react";

export default function Reviews() {
    const reviews = [
        {name: "Мария Аминова", role: "Джуниор Java-разработчик", text: "Eskhata Academy — это не просто обучение, а реальная подготовка к работе.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRv8xNLq1BU2yxwXvdHwXfG9vWhOQfAuh6A&s"},
        {name: "Саидов Алишер", role: " Выпускник курса IT в банке", text: "Обучение в Eskhata Academy дало мне реальные навыки работы в банковской сфере", img: "https://thumbs.dreamstime.com/b/%D0%B2%D0%B7%D1%80%D0%BE%D1%81%D0%BB%D1%8B%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BE%D1%82-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE-%D1%81%D1%82%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-340616521.jpg"},
        {name: "Акпар Товаров", role: "академия программирования", text: "Программа обучения выстроена профессионально и ориентирована на практику", img: "https://img.freepik.com/free-photo/cheerful-smiling-blond-handsome-young-man-wearing-black-t-shirt-grey-wall_176420-588.jpg?semt=ais_hybrid&w=740&q=80"},
        {name: "Сиёвуш Фозилов", role: "академия программирования", text: "После курса я стал увереннее и получил хорошую базу для карьеры.", img: "https://img.freepik.com/free-photo/portrait-handsome-young-man-closeup_176420-15568.jpg?semt=ais_hybrid&w=740&q=80"},
    ];
    return(
        <section className="reviews" >
            <h2>Отвызы выпускников</h2>
            <div className="reviews-grid">
            {reviews.map((r, i,) => (
                <div key={i} className="reviews-card">
                    <img src={r.img} alt={r.name} className="reviews-img"/>
                    <div className="reviews-name">{r.name}</div>
                    <div className="reviews-role">{r.role}</div>
                    <p>{r.text}</p>
                    </div>
            ))}
            </div>
        </section>
    )
}
