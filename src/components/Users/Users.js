import React from "react";
import styles from './Users.module.css';
import userPhoto from "../../assets/img/user.png";
import { NavLink } from 'react-router-dom';
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
            })}
        </div>
    {
        props.users.map (u => <div key={u.id} >
            <span>
                <div>
                    <NavLink to={'/main-content/' + u.id}>
                        <img src={ u.photos.small != null ? u.photos.small : userPhoto } className={styles.avatar}></img>
                    </NavLink>
                </div>
                <div>
                    { u.followed 
                    ? <button onClick={ () => { 
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "2284dbf7-d44b-43f5-bec8-0955d6a517ff"
                            }
                        })
                            .then(response => {
                            if (response.data.resultCode == 0) {
                                props.unFollow(u.id);
                            }
                        });


                    }}>UnFollow</button> 
                    : <button onClick={ () => { 

                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "2284dbf7-d44b-43f5-bec8-0955d6a517ff"
                            }
                        })
                            .then(response => {
                            if (response.data.resultCode == 0) {
                                props.follow(u.id);
                            }
                        });
                        
                        
                        }}>Follow</button>}           
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.region.contry'}</div>
                    <div>{'u.region.city'}</div>
                </span>
            </span>
        </div>)
    }
    </div>
}

export default Users;