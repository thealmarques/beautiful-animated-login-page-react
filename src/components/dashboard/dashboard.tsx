import React from 'react';
import './dashboard.scss';
import { RouteComponentProps } from 'react-router-dom';
import { State } from '../../shared/models/state.models';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setUserAction } from '../../shared/store/actions/user.actions';

interface Props extends RouteComponentProps {
    username: string;
    setUserType(username: string): void
}

class Dashboard extends React.Component<Props> {
    render() {
        return (
            <div className="dashboard">
                Welcome, {this.props.username}
                <button onClick={this.signOut.bind(this)} className="dashboard--button">Sign out</button>
            </div>
        );
    }

    signOut() {
        this.props.setUserType('');
        this.props.history.push('/');
    }
}

function mapStateToProps(state: State) {
    const { userState } = state;
    return { username: userState.username };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        setUserType: (username: string) =>
          dispatch(setUserAction({
              username
          }))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);