import React from 'react';
import { addPostActionCreator } from '../../../redux/main-content-reducer';
import { updateNewPostTextActionCreator } from '../../../redux/main-content-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }
  
  return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.mainContentPage.posts} newPostText={state.mainContentPage.newPostText}/>);
}

export default MyPostsContainer;
