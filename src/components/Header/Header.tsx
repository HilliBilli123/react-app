import { Component } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="header-content content-width">
            <div className="header-logo header-nav_text">
              <Link to="/">Продукты онлайн</Link>
            </div>
            <div className="header-nav">
              <div className="header-nav_text header-nav_title">
                <Link to="/">Главная</Link>
              </div>
              <div className="header-nav_text header-nav_title">
                <Link to="/catalog">Католог</Link>
              </div>
              <div className="header-nav_text header-nav_title">
                <Link to="/cart">Корзина</Link>
              </div>
              <div className="header-nav_text header-nav_title">
                <Link to="/contact">Контакты</Link>
              </div>
            </div>
            <div className="header-login header-nav_text">
              Войти/Регистрация
            </div>
          </div>
        </div>
      </>
    );
  }
}
