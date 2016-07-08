import React, { Component } from 'react';
import GitHubUser from '../services/GitHubUser';

class SearchUser extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const { updateUser, updateRepos } = this.props;

        GitHubUser.getByUsername(this.refs.username.value).then((response) => {
            updateUser(response.data);
        });

        GitHubUser.getReposByUsername(this.refs.username.value).then((response) => {
            updateRepos(response.data);
        });
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>GitHub Info</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                ref="username"
                                className="form-control"
                                placeholder="Ex: lucianomlima"
                                />
                        </div>
                        <button type="submit" className="btn btn-primary">Buscar</button>
                    </form>
                </div>
            </div>
        )
    }
};

SearchUser.propTypes = {
    updateUser: React.PropTypes.func.isRequired,
    updateRepos: React.PropTypes.func.isRequired
};

export default SearchUser;
