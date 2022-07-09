import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfeliStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  } 

  return (
    <div>
      <div className={s.profileDescription}>
        <img src={props.profile.photos.large}></img>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  ); 
}

export default ProfileInfo;
