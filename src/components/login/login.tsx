import React from 'react';
import './login.scss';
import logo from '../../assets/images/logo.png';
import facebook from '../../assets/images/facebook.svg';
import google from '../../assets/images/google.svg';
import linkedin from '../../assets/images/linkedin.svg';

class Login extends React.Component {
    state = {
        login: true
    };
    render() {
        return (
            <div className="login">
                <div className={`login__colored-container ${this.state.login ? 'login__colored-container--left' : 'login__colored-container--right'}`}></div>
                <div className={`login__welcome-back ${this.state.login ? 'login__welcome-back--active' : 'login__welcome-back--inactive'}`}>
                    <div className="login__welcome-back__logo-container">
                        <img className="login__welcome-back__logo-container--image" src={logo} alt="Budwriter" />
                        Budwriter
                    </div>
                    <div className="login__welcome-back__main-container">
                        <div className="login__welcome-back__main-container__text-container">
                            <span className="login__welcome-back__main-container__text-container--title">
                                Welcome Back!
                            </span>
                            <span className="login__welcome-back__main-container__text-container--secondary">
                                To keep sharing your work with us, please log in.
                            </span>
                        </div>
                        <div onClick={() => {
                            this.setState({
                                login: !this.state.login
                            });
                        }} className="login__welcome-back__main-container__button-container">
                            Sign In
                        </div>
                    </div>
                </div>
                <div className={`login__create-container ${this.state.login ? 'login__create-container--active' : 'login__create-container--inactive'}`}>
                    Create Account
                    <div className="login__create-container__social-container">
                        <img className="login__create-container__social-container--facebook-icon" src={facebook} alt=""/>
                        <img className="login__create-container__social-container--google-icon" src={google} alt=""/>
                        <img className="login__create-container__social-container--linkedin-icon" src={linkedin} alt=""/>
                    </div>
                    <span className="login__create-container--info-text">or use email for your registration</span>
                    <div className="login__create-container__form-container">
                        <form onSubmit={() => alert('Submitted')}>

                        </form>
                    </div>
                </div>
                <div className={`login__register-container ${!this.state.login ? 'login__register-container--active' : 'login__register-container--inactive'}`}>
                    <div className="login__register-container__logo-container">
                        <img className="login__register-container__logo-container--image" src={logo} alt="Budwriter" />
                        Budwriter
                    </div>
                    <div className="login__register-container__main-container">
                        Sign in to Budwriter
                    </div>
                </div>
                <div className={`login__hello-container ${!this.state.login ? 'login__hello-container--active' : 'login__hello-container--inactive'}`}>
                    <div className="login__welcome-back__main-container__text-container">
                        <span className="login__welcome-back__main-container__text-container--title">
                            Hello, stranger!
                            </span>
                        <span className="login__welcome-back__main-container__text-container--secondary">
                            Enter your personal details and start your own portfolio!
                        </span>
                    </div>
                    <div onClick={() => {
                        this.setState({
                            login: !this.state.login
                        });
                    }} className="login__welcome-back__main-container__button-container">
                        Sign Up
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;