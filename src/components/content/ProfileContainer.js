import React from 'react'
import {connect} from "react-redux";
import * as axios from "axios"
import {setUserProfile} from "../../redux/profile_reducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        console.log(this.props)
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2; // <<< my own feature
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(response=>{
            this.props.setUserProfile(response.data);
        } )
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state)=> {
    return {
        profile: state.profileStates.profile,
        currentProfile: state.auth.userId // <<< my own feature
    }
}
let ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps,{setUserProfile})(ProfileContainerWithRouter)