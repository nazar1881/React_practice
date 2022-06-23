import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/main-content-reducer';
import { updateNewPostTextActionCreator } from '../../../redux/main-content-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    posts: state.mainContentPage.posts,
    newPostText: state.mainContentPage.newPostText
  }
}

let mapDispathToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(MyPosts);

export default MyPostsContainer;
