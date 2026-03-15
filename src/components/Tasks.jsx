import React from "react";

export default function Tasks() {
  return (
    <section className="tasks">
      <h2 className="tasks-title">Пример задач</h2>
      <div className="tasks-wrapper">
        <div className="task-card">
          <img src="https://www.saksben.com/assets/skill-icons/html-css.png" alt="" />
          <h3> CSS / HTML</h3>
          <p>Разработать адаптивную карточку товара с современным UI-дизайном.</p>
          <button className="task-btn">Попробовать</button>
        </div>
        <div className="task-card">
          <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" />
          <h3>JavaScript</h3>
          <p>Разработать простой калькулятор с базовыми математическими операциями.</p>
          <button className="task-btn">Попробовать</button>
        </div>
        <div className="task-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAmafdPNr9fd0KC0Z98WYEC7Wl1wYlPVf-A&s" alt="" />
          <h3>React</h3>
          <p>Создать ToDo List с добавлением, удалением и управлением задачами.</p>
          <button className="task-btn">Попробовать</button>
        </div>
      </div>
    </section>
  );
}