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

    async componentDidMount() {
        this.setState({ loading: true });
        const res = await axios.get('https://api.github.com/users');

        this.setState({ users: res.data, loading: false });
    }

    render() {
        return (
            <div className='App'>
                <Navbar title='Github Finder' icon='fa fa-github' />

                <div className='container'>
                    <Search />
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
