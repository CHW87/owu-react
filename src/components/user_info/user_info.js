import React from "react";
import './user_info.css'

export const UserInfo = ({user}) => {

    const {avatar, character } = user;

    return (
        <div className="user_info">
            <img src={avatar} className='user_info_avatar' alt={'avatar'} />
            <div className="user_info_details">
                <span>{character}</span>
            </div>

        </div>
    )
}
