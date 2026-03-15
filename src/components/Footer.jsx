import React from "react";
import { FaInstagram, FaTelegram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-grid">
        <div>
          <h3>Eskhata-Academy</h3>
          <p>Профессиональное IT обучение при поддержке Банка Эсхата.</p>
        </div>
        <div>
          <h3>Контакты</h3>
          <p>Тел: 992 44-600-0-600</p>
          <p>Короткий номер: 808</p>
        </div>
        <div>
          <h3>Соцсети</h3>
          <div className="socials">
            <a href="https://instagram.com" target="_blank">
              <FaInstagram />
            </a>  
            <a href="https://t.me" target="_blank">
              <FaTelegram />
            </a>
            <a href="https://youtube.com" target="_blank">
              <FaYoutube />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}