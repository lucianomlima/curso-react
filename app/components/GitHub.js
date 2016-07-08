import React from 'react';
import SearchUser from './SearchUser';
import UserInfo from './UserInfo';

const GitHub = React.createClass({
    getInitialState() {
        return {
            user: null,
            repos: []
        };
    },
    updateUser(user) {
        this.setState({user: user});
    },
    updateRepos(repos) {
        this.setState({repos: repos});
    },
    render() {
        return (
            <div className="container">
                <SearchUser
                    updateUser={this.updateUser}
                    updateRepos={this.updateRepos}
                />
                <UserInfo
                    user={this.state.user}
                    repos={this.state.repos}/>
            </div>
        );
    }
});

export default GitHub;
