import s from './Main-content.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const MainContent = (props) => {
  return (
    <div>
      <div>
        <ProfileInfo/>
      </div>
        <MyPosts posts={props.mainContentPage.posts} newPostText={props.mainContentPage.newPostText} dispatch={props.dispatch}/>
    </div>
  );
}

export default MainContent;
