import React from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Login from './components/login/login';
import { State } from './shared/models/state.models';

interface Props {
    username: string;
}

class AppRouter extends React.Component<Props> {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/dashboard">
                        <div>{this.props.username}</div>
                    </Route>
                    <Route path="/">
                        <Login />
                    </Route>
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