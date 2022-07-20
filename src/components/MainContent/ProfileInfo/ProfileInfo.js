import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusHook from './ProfeliStatusHook';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader/>
  } 

  return (
    <div>
      <div className={s.profileDescription}>
        <img src={profile.photos.large}></img>
        <ProfileStatusHook status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  ); 
}

export default ProfileInfo;
