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

        GitHubUser.getByUsername(this.refs.username.value)
            .then((response) => {
                updateUser(response.data);
            })
            .catch((response) => {
                if (response.status == 404) {
                    alert('getByUsername rejected');
                }
            });

        GitHubUser.getReposByUsername(this.refs.username.value)
            .then((response) => {
                updateRepos(response.data);
            })
            .catch((response) => {
                if (response.status == 404) {
                    alert('getReposByUsername rejected');
                }
            });
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>GitHub Info</h1>
                <div className="row">
                    <form className="form-horizontal" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="control-label col-sm-2">Username</label>
                            <div className="col-sm-10">
                                <div className="input-group">
                                    <span className="input-group-addon">@</span>
                                    <input
                                        type="text"
                                        ref="username"
                                        className="form-control"
                                        placeholder="Ex: lucianomlima"
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-primary">Buscar</button>
                            </div>
                        </div>
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
