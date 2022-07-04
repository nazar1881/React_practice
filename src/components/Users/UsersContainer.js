import Users from "./Users";
import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, unFollow, toggleFollowingProgress, getUsers} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";



class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} 
            currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users}
            follow={this.props.follow} unFollow={this.props.unFollow} isFetching={this.props.isFetching} toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
            /> 
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

/*let mapDispathToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (userId) => {
            dispatch(setUsersAC(userId))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/

export default connect (mapStateToProps, {
    follow, unFollow, setCurrentPage, toggleFollowingProgress, getUsers: getUsers
})(UsersAPIContainer);