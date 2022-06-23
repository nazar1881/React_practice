import logo from'../../globe-icon.svg';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.backGround}>
      <div className={s.navBar}>
        <img className={s.navLogo} src={logo}></img>
      </div> 
      <div className={s.loginBlock}>
        {props.isAuth ? props.login:
        <NavLink to={'/login'} className={s.loginLink}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;
