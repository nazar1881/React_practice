import s from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator } from '../../../redux/main-content-reducer';
import { updateNewPostTextActionCreator } from '../../../redux/main-content-reducer';

const MyPosts = (props) => {
  
  let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }
  
  return (
      <div className={s.postsWraper}>
        My posts
        <div>
          <textarea onChange={onPostChange} ref={newPostElement}  value={props.newPostText}/>
          <button className={s.btn} onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
  );
}

export default MyPosts;
