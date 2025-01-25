import React from "react";
import { loginAction } from "../../actions/accountAction";
import LoginView from "./LoginView";
import {connect} from 'react-redux';

class LoginContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login_failed :false
        };
    }

    login(data) {
        this.props.dispatch(loginAction({email: data.email,password: data.password}));
    }

    render(){
        return(
            // <LoginView login={this.login} login_failed = {this.props.logindata.login_failed}/>
            <LoginView login={this.login} login_failed = {this.state.login_failed}/>
        )
    }
}

export default connect(state=> ({logindata: state.logindata}))(LoginContainer)

