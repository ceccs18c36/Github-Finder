import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
    };
    render() {
        const { hireable, avatar_url, login, bio } = this.props.user;
        const { loading } = this.props;

        if (loading) return <Spinner />;
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>
                    <i className='fa fa-arrow-circle-left'></i> Back to Search
                </Link>
                Hireable:{' '}
                {hireable ? (
                    <i className='fa fa-check text-success'></i>
                ) : (
                    <i className='fa fa-times text-danger '></i>
                )}
                <div className='card grid-2'>
                    <div className='all-center'>
                        <img
                            src={avatar_url}
                            alt='Avatar'
                            className='round-img'
                            style={{ width: '150px' }}
                        />
                        <h3>{login}</h3>
                        <p>{bio}</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default User;
