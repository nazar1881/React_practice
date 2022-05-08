import s from './SideBarFriends.module.css'

const SideBarFriends = (props) => {
  return (
    <div className={s.wrapper}>
      <img src={props.avatar} className={s.avatar}></img>
      <p className={s.name}>{props.name}</p>
    </div>
  );
}

export default SideBarFriends;
