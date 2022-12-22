import React from 'react'

export const PersonInfo = ({ name, avatarLink, phoneNumber, email }) => {
    return (
        <div>
            <h1>My Contacts</h1>
            <h2>{name}</h2>
            <img
                src={avatarLink}
                alt="avatar_img"
            />
            <p>{phoneNumber}</p>
            <p>{email}</p>
        </div>

    )
}
