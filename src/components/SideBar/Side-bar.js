import { NavLink } from 'react-router-dom';
import s from './Side-bar.module.css'
import SideBarFriends from './SideBarFriends/SideBarFriends';

const SideBar = (props) => {
  
  let sideBarFriendsItem = props.state.friends.map(friend => <SideBarFriends avatar={friend.avatar} name={friend.name}/>)

  return (
    <div className={s.background}>
      <div className={s.link}>
        <NavLink to='/main-content' className={navData => navData.isActive?s.active :s.link}>Profile</NavLink>
      </div>
      <div className={s.link}>
        <NavLink to='/dialogs' className={navData => navData.isActive?s.active :s.link}>Messages</NavLink>
      </div>
      <div className={s.link}>
        <NavLink to='/news' className={navData => navData.isActive?s.active :s.link}>News</NavLink>
      </div>
      <div className={s.link}>
        <NavLink to='/settings' className={navData => navData.isActive?s.active :s.link}>Settings</NavLink>
      </div>
      <div className={s.sideBarFriendsWrapper}>
        <h2>Friends</h2>
        <div className={s.sideBarFriendsAvatars}>
          {sideBarFriendsItem}
        </div>
      </div>
    </div>  
  );
}

export default SideBar;
