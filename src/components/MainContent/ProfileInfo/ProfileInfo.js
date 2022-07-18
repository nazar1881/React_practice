import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfeliStatus'
import ProfileStatusHook from './ProfeliStatusHook';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  } 

  return (
    <div>
      <div className={s.profileDescription}>
        <img src={props.profile.photos.large}></img>
        <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  ); 
}

export default ProfileInfo;
