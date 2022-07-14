import React from "react";
import MainContent from "./Main-content";
import { connect } from "react-redux";
import {getUsers, getStatus, updateStatus} from "../../redux/main-content-reducer";
import { Navigate, useParams } from 'react-router-dom';
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


export function withRouter(MainContentContainer){
    return(props)=>{

       const match  = {params: useParams()};
       return <MainContentContainer {...props}  match = {match}/>
   }
 } 
 
class MainContentContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        };
        this.props.getUsers(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <div>
                <MainContent {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.mainContentPage.profile,
    status: state.mainContentPage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUsers, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(MainContentContainer);