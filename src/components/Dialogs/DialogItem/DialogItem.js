import React from "react";
import { NavLink } from "react-router-dom";
import s from '../Dialogs.module.css';

const DialogItem = (props) => {
    
    let path = "/dialogs/" + props.id;

    return (<div className={s.dialog + ' ' + s.active}>
            <img src={props.avatar} className={s.avatar}></img> 
            <NavLink to={path} className={s.dialogLink}>{props.name}</NavLink>
        </div>)
}

export default DialogItem;