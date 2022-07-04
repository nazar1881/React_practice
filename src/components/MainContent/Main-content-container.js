import React from "react";
import MainContent from "./Main-content";
import { connect } from "react-redux";
import {getUsers} from "../../redux/main-content-reducer";
import { Navigate, useParams } from 'react-router-dom';
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
            userId = 2;
        };
        this.props.getUsers(userId);
    }

    render() {
        return (
            <div>
                <MainContent {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let AuthRedirectComponent = withAuthRedirect(MainContentContainer);

let mapStateToProps = (state) => ({
    profile: state.mainContentPage.profile,
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUsers}) (WithUrlDataContainerComponent);