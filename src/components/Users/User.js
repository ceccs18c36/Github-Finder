import React, { Component } from 'react';

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }
    render() {
        const {
            name,
            bio,
            avatar_url: avatar,
            login,
            followers,
            following,
            repos_url,
        } = this.props.user;
        for (let item of [
            name,
            bio,
            avatar,
            login,
            followers,
            following,
            repos_url,
        ]) {
            console.log(item);
        }
        return <div>Hello World</div>;
    }
}

export default User;
