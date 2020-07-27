import React from 'react';
import { Link } from 'react-router-dom';

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
            <div>
                <Link
                    to={`/user/${username}`}
                    className='btn btn-dark btn-sm my-1'
                >
                    More
                </Link>
            </div>
        </div>
    );
};

export default UserCard;
