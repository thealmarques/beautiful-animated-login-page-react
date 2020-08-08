import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
    isAuthenticated: boolean;
    redirectTo: string;
}

class AuthenticatedRoute extends React.Component<Props> {
    render() {
        return this.props.isAuthenticated ? <Route {...this.props}></Route> : <Redirect to={this.props.redirectTo}></Redirect>
    }
}

export default AuthenticatedRoute;