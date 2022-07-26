import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusHook from './ProfeliStatusHook';
import userPhoto from "../../../assets/img/user.png";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  if (!profile) {
    return <Preloader/>
  } 

  const mainPhotoSelected = (e) => {
    if(e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>
      <div className={s.profileDescription}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto}></img>
        { isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
        <ProfileStatusHook status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  ); 
}

export default ProfileInfo;
