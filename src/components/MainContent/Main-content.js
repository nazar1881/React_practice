import s from './Main-content.module.css'
import MyPostsContainer from './MyPosts/MyPosts-container';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const MainContent = (props) => {
  return (
    <div>
      <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      </div>
        <MyPostsContainer/>
    </div>
  );
}

export default MainContent;
