import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import Search from './components/Users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
    state = {
        users: [],
        loading: false,
    };

    findUsers = async (name) => {
        this.setState({ loading: true });
        const res = await axios.get(
            `https://api.github.com/search/users?q=${name}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
        );
        this.setState({ users: res.data.items, loading: false });
    };
    render() {
        return (
            <div className='App'>
                <Navbar title='Github Finder' icon='fa fa-github' />

                <div className='container'>
                    <Search findUser={this.findUsers} />
                    <Users
                        loading={this.state.loading}
                        users={this.state.users}
                    />
                </div>
            </div>
        );
    }
}

export default App;
