import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        name: '',
    };

    static propTypes = {
        findUser: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        fireAlert: PropTypes.func.isRequired,
    };

    onchange = (e) => this.setState({ [e.target.name]: e.target.value });

    find = (e) => {
        e.preventDefault();
        if (this.state.name === '') {
            this.props.fireAlert(
                'Please Enter the username before searching',
                'info'
            );
        } else {
            this.props.findUser(this.state.name);
            this.setState({ name: '' });
        }
    };

    render() {
        const { showClear, clearUsers } = this.props;
        return (
            <form className='form' onSubmit={this.find}>
                <input
                    type='text'
                    name='name'
                    placeholder='Enter the username'
                    value={this.state.name}
                    onChange={this.onchange}
                />
                <button type='submit' className='btn btn-dark btn-block'>
                    Search
                </button>
                {showClear && (
                    <button
                        className='btn btn-clear btn-block'
                        type='submit'
                        onClick={clearUsers}
                    >
                        Clear
                    </button>
                )}
            </form>
        );
    }
}

export default Search;
