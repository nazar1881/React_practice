import s from './Post.module.css'

const Post = (props) => {
  return (      
    <div className={s.background}>
       <img src='https://img-9gag-fun.9cache.com/photo/aZxDem3_460s.jpg'></img>
       <p>{props.message}</p>
       <div>
          <span>Likes: {props.likesCount}</span>
       </div>
    </div>    
  );
}

export default Post;
