import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/main-content-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    posts: state.mainContentPage.posts,
    newPostText: state.mainContentPage.newPostText
  }
}

let mapDispathToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(MyPosts);

export default MyPostsContainer;
