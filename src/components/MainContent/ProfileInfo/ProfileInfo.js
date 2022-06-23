import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  } 

  return (
    <div>
      <div className={s.profileDescription}>
        <img src={props.profile.photos.large}></img>
        ava + description
      </div>
    </div>
  ); 
}

export default ProfileInfo;
