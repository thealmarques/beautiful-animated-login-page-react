import React from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Login from './components/login/login';
import { State } from './shared/models/state.models';
import AuthenticatedRoute from './shared/authentication/authenticated-route';
import Dashboard from './components/dashboard/dashboard';

interface Props {
    username: string;
}

class AppRouter extends React.Component<Props> {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Login}></Route>
                    <AuthenticatedRoute
                        path="/dashboard"
                        isAuthenticated={this.props.username.trim().length > 0}
                        component={Dashboard}
                        redirectTo={"/"}>
                    </AuthenticatedRoute>
                </Switch>
            </Router>
        );
    }
}

function mapStateToProps(state: State) {
    const { userState } = state;
    return { username: userState.username };
}

export default connect(mapStateToProps)(AppRouter);