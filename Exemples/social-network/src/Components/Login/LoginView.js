import React from   'react';
import './login.css';

class LoginView extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoginUserNameEmpty: false, 
            isLoginPasswordEmpty: false ,
            login_failed :false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        console.log(e.target.name);
        this.setState({[e.target.name]:e.target.value});
    }

    validateLoginFormAndSubmit(){
        console.log('click check data');
        let isLoginUserNameEmpty = true, isLoginPasswordEmpty = true;
        if (this.state.email && this.state.email.trim() !== "") {
          isLoginUserNameEmpty = false;
        }
        if (this.state.password && this.state.password.trim() !== "") {
          isLoginPasswordEmpty = false;
        }
        if (isLoginPasswordEmpty || isLoginUserNameEmpty) {
          this.setState({isLoginUserNameEmpty, isLoginPasswordEmpty});
        } 
        else {
          this.setState({isLoginUserNameEmpty, isLoginPasswordEmpty});
         this.props.login(this.state);
        }
      }

    render(){
        return(
            <div className="container-fluid loginContainer mt-5">
                <div>
                    <div className='w-100'>
                        <form className='col-12 col-xl-4 col-lg-6 col-md-8 col-sm-10 loginArea offset-xl-4 offset-lg-3 offset-md-2 offset-sm-1'>
                        <h1 className='slide-design-header mb-5 text-center'>Sign in</h1>
                        <div className={this.props.login_failed ? 'input-group login-failed-border':'input-group'}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text"></span>
                                </div>

                                <input
                                    className="form-control"
                                    name='email'
                                    type='email'
                                    id='email'
                                    placeholder='Username'
                                    onChange={this.handleChange}
                                />
                         </div>
                         <div className={this.props.login_failed ? 'input-group login-failed-border mt-3':'input-group mt-3'}>
                            <div className="input-group-prepend">
                                <span className="input-group-text"></span>
                            </div>
                            <input
                                className="form-control"
                                name='password'
                                type='password'
                                id='password'
                                placeholder='Password'
                                onChange={this.handleChange}
                            />
                          </div>
                          <button
                  className='btn btn-block btn-lg btn-primary mt-3 btnLogin'
                  onClick={(e) => { e.preventDefault(); this.validateLoginFormAndSubmit() }}
                >
                  Login
                </button>
                <p className="mt-4 text-center">Don't have an account? </p>
                <button
                  className='btnSignUpNow mt-2 btn-block'
                  onClick={(e) => { e.preventDefault(); this.props.handleSignUpCondition() }}
                >
                    Sign up now!
                    </button>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default LoginView;