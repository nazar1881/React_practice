import React from "react";
import styles from './Users.module.css';
import userPhoto from "../../assets/img/user.png";
import { NavLink } from 'react-router-dom';

let User = ({user, followingInProgress, unFollow, follow}) => {
    return (
    <div >
            <span>
                <div>
                    <NavLink to={'/main-content/' + user.id}>
                        <img src={ user.photos.small != null ? user.photos.small : userPhoto } className={styles.avatar}></img>
                    </NavLink>
                </div>
                <div>
                    { user.followed 
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => {unFollow(user.id)}}>UnFollow</button> 
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => {follow(user.id)}}>Follow</button>}           
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.region.contry'}</div>
                    <div>{'user.region.city'}</div>
                </span>
            </span>
        </div>)
    
}

export default User;