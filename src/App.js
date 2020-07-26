import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import Search from './components/Users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
    state = {
        users: [],
        loading: false,
        alert: null,
    };

    findUsers = async (name) => {
        this.setState({ loading: true });
        const res = await axios.get(
            `https://api.github.com/search/users?q=${name}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
        );
        this.setState({
            users: res.data.items,
            loading: false,
        });
    };

    clearUsers = () => {
        this.setState({ users: [], loading: false });
    };

    fireAlert = (message, type) => {
        this.setState({ alert: { msg: message, type: type } });
        setTimeout(() => this.setState({ alert: null }), 3000);
    };

    render() {
        const { users, loading } = this.state;
        return (
            <Router>
                <div className='App'>
                    <Navbar title='Github Finder' icon='fa fa-github' />
                    <Switch>
                        <div className='container'>
                            <Route
                                exact
                                path='/'
                                render={(props) => (
                                    <Fragment>
                                        <Alert alert={this.state.alert} />
                                        <Search
                                            findUser={this.findUsers}
                                            clearUsers={this.clearUsers}
                                            showClear={
                                                users.length > 0 ? true : false
                                            }
                                            fireAlert={this.fireAlert}
                                        />
                                        <Users
                                            loading={loading}
                                            users={users}
                                        />
                                    </Fragment>
                                )}
                            />
                            <Route exact path='/about' component={About} />
                        </div>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
