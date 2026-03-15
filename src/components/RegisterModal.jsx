import React, { useRef } from "react";

export default function RegisterModal({ close }) {
  const modalRef = useRef();
  const modal = (e) => {
    if(modalRef.current && ! modalRef.current.contains(e.target)){
      close();
    }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name:e.target.name.value,
      phone:e.target.phone.value,
      course:e.target.course.value,
    };
    localStorage.setItem("registrationData", JSON.stringify(data));
    alert("✅Заявка отправлена ")
    close();
  };
  return(
    <div className="modal" onClick={modal}>
      <div className="modal-content" ref={modalRef}>
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <input name="name" placeholder="Имя" required />
          <input name="phone"  placeholder="Телефон" required />
          <input name="course"  placeholder="Курс" required />
          <button type="submit" className="btn">Отправить</button>
        </form>
        <button className="close-btn" onClick={close}>Закрыть</button>
      </div>
    </div>
  );
}