import React from 'react';
import './login.scss';

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <div className="login__welcome-container"></div>
                <div className="login__create-container"></div>
            </div>
        );
    }
}

export default Login;