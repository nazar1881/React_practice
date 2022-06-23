import axios from "axios";
import React from "react";
import MainContent from "./Main-content";
import { connect } from "react-redux";
import {setUserProfile} from "../../redux/main-content-reducer";
import { useParams } from 'react-router-dom';

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <div>
                <MainContent {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.mainContentPage.profile
})

let WithUrlDataContainerComponent = withRouter(MainContentContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);