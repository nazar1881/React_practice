import s from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, minLength2, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={"newPostText"} placeholder={"Enter text"} validate={[required, maxLength10]}/>
        <button className={s.btn}>Add post</button>
      </form>
  )
}

const AddNewPostReduxForm = reduxForm({form: "AddNewPost"})(AddNewPostForm)

const MyPosts = (props) => {
  
  let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

  const onAddNewPost = (values) => {
    props.addPost(values.newPostText)
  }
  
  return (
      <div className={s.postsWraper}>
        My posts
        <AddNewPostReduxForm onSubmit={onAddNewPost}/>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
  );
}

export default MyPosts;
