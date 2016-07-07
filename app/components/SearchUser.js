var React = require('react');
var PropTypes = React.PropTypes;

var SearchUser = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        console.log(this.refs.username.value);
    },
    render: function() {
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
});

module.exports = SearchUser;
