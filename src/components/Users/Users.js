import React from "react";
import Paginator from "../common/Paginator/Paginator.js";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged}/>
        <div>
            {
                users.map (u => <User user={u} followingInProgress={props.followingInProgress} key={u.id} unFollow={props.unFollow} follow={props.follow}/> )
            }
        </div>
    </div>
}

export default Users;