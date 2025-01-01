import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

const hideHeaderPaths = ["/login"];

const Header = () => {
  const location = useLocation(); // Используем хук внутри функционального компонента
  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);

  if (shouldHideHeader) return null; // Скрываем Header, если находимся на странице входа

  return (
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
            <Link to="/catalog">Каталог</Link>
          </div>
          <div className="header-nav_text header-nav_title">
            <Link to="/cart">Корзина</Link>
          </div>
          <div className="header-nav_text header-nav_title">
            <Link to="/contact">Контакты</Link>
          </div>
        </div>
        <div className="header-login header-nav_text">
          <Link to="/login">Войти/Регистрация</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
