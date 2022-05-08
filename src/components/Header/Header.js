import logo from'../../globe-icon.svg'
import s from './Header.module.css'

const Header = () => {
  return (
    <div className={s.backGround}>
      <div className={s.navBar}>
        <img className={s.navLogo} src={logo}></img>
      </div> 
    </div>
  );
}

export default Header;
