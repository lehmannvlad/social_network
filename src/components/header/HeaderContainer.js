import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserAuthData} from "../../redux/auth_reducer";
import Header from "./Header";

class HeaderContainer extends React.Component{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials:true})
            .then( response=>{
                    if (response.data.resultCode===0) {
                        let {id, login, email} = response.data.data
                        this.props.setUserAuthData(id,login, email)
            }

                }            )
    }
    render(){
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state)=>{
    return {
        login: state.auth.login, //// here can be bug
        isAuthorized: state.auth.isAuthorized
    }
}
export default connect (mapStateToProps, {setUserAuthData})(HeaderContainer);