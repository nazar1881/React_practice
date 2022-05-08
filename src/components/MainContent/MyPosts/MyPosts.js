import s from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
  
  let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }
  
  return (
      <div className={s.postsWraper}>
        My posts
        <div>
          <textarea ref={newPostElement}></textarea>
          <button className={s.btn} onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
  );
}

export default MyPosts;
