import s from './Main-content.module.css'
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPosts-container';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const MainContent = (props) => {
  return (
    <div>
      <div>
        <ProfileInfo/>
      </div>
        <MyPostsContainer store={props.store}/>
    </div>
  );
}

export default MainContent;
