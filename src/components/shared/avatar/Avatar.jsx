import './style.scss'

import React from 'react'
import AvatarPng from '../../../asset/avatar.jpeg'

const Avatar = () => {
    return (
        <div className="avatar">
            <img className='avatar__image' src={AvatarPng} alt="avatar" />
        </div>
    )
}

export default Avatar