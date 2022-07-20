import Users from "./Users";
import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, unFollow, toggleFollowingProgress, getUsers} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsersMpSuperSelector } from "../../redux/users-selector";



class UsersAPIContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber,pageSize);
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
        users: getUsersMpSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect (mapStateToProps, {
        follow, unFollow, setCurrentPage, toggleFollowingProgress, getUsers: getUsers
    })
)(UsersAPIContainer)

