import s from './Main-content.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const MainContent = (props) => {
  return (
    <div>
      <div>
        <ProfileInfo/>
      </div>
        <MyPosts posts={props.state.posts} addPost={props.addPost}/>
    </div>
  );
}

export default MainContent;
