import React, { Component } from 'react';

class Search extends Component {
    state = {
        name: '',
    };

    onchange = (e) => this.setState({ [e.target.name]: e.target.value });

    find = (e) => {
        e.preventDefault();
        this.props.findUser(this.state.name);
        this.setState({ name: '' });
    };

    render() {
        return (
            <form className='form' onSubmit={this.find}>
                <input
                    type='text'
                    name='name'
                    id=''
                    value={this.state.name}
                    onChange={this.onchange}
                />
                <button type='submit' className='btn btn-dark btn-block'>
                    Search
                </button>
                {this.props.showClear && (
                    <button
                        className='btn btn-clear btn-block'
                        type='submit'
                        onClick={this.props.clearUsers}
                    >
                        Clear
                    </button>
                )}
            </form>
        );
    }
}

export default Search;
