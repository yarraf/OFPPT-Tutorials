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
        this.login = this.login.bind(this);
    }

    login(data) {
        this.props.dispatch(loginAction({email: data.email,password: data.password}));
    }

    render(){
        return(
            <React.Fragment>
                <LoginView login={this.login} login_failed = {this.props.logindata.login_failed}/>
            </React.Fragment>          
        )
    }
}

// const mapDispatchToProps = dispatch =>{
//     return {
//         dispatch : dispatch
//     };
// }

const mapStateToProps = state=>{
    return {logindata: state.logindata};
}
export default connect(mapStateToProps,null)(LoginContainer)

