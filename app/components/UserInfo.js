var React = require('react');

function UserInfo(props) {
    var userInfo = props.user ?
    (
        <div className="row">
            <div className="col-lg-4">
                <img
                    className="img-circle"
                    src={props.user.avatar_url}
                    alt="avatar"
                    width="140"
                    height="140"/>
                <h2>{props.user.login}</h2>
                <p>{props.user.name}</p>
                <p>Followers: {props.user.followers} / Following: {props.user.following}</p>
                <p><a className="btn btn-default" href={props.user.html_url} role="button">View details</a></p>
            </div>
        </div>
    ) : null;

    return userInfo;
}

module.exports = UserInfo;
