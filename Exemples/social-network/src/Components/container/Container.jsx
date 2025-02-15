import React from "react";
import { Navigate, Route, Routes} from "react-router-dom";
import { connect } from "react-redux";
import HomeContainer from "../home/HomeContainer";

class Container extends React.Component{
   
        state= {
            isLoggedIn: false,
            isLoadingLocalStorage:true,
        };
    
    componentDidMount(){
        if(localStorage.getItem('AUTH_TOKEN')){
            this.setState({isLoggedIn: true, isLoadingLocalStorage:false});
            //this.props.dispatch({type:FETCHED_USER_INFO, payload:this.userInfoResponse}) //without redux-saga
            // this.props.getUserInfo();
            //get the data to load home page
            if (this.props.location.pathname === '/'){
                this.props.history.push({
                    pathname: '/home',
                });
            }

        }else{
            this.setState({isLoadingLocalStorage:false});
        }
    }

    render(){
        console.log('container rendre '+this.state.isLoadingLocalStorage)
        return (
            <React.Fragment>
                {this.state.isLoggedIn ? 
                <section>
                    {/* <HeaderContainer/> */}
                    <Routes>
                        <Route path="/home" component={HomeContainer}/>
                    </Routes>
                    {/* <h1>Home</h1> */}
                </section>:  
                <Navigate to="/login"/>  }
            </React.Fragment>
        );
            
    }
}

export default connect(()=> ({}),null)(Container);