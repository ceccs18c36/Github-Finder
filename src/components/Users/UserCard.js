import React from 'react';

const UserCard = ({ user: { login: username, avatar_url: avatar } }) => {
    return (
        <div className='card text-center'>
            <img
                src={avatar}
                alt=''
                className='round-img'
                style={{ width: '60px' }}
            />
            <h1>{username}</h1>
        </div>
    );
};

export default UserCard;
