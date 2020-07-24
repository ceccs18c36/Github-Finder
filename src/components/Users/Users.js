import React from 'react';
import UserCard from './UserCard';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
    if (loading) {
        return <Spinner />;
    } else {
        return (
            <div style={Userstyle}>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        );
    }
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

const Userstyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem',
};

export default Users;
