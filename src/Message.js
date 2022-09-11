import React from 'react'
import './Message.css'
import { Avatar } from '@mui/material';


function Message({timestamp, message, user}) {
  
  return (
    <div className='message'>
        <Avatar src={user.photo}/>
        <div className="message__info">
            <h4>{user.displayName}
                <span className ='message__timestamp'>{new Date(timestamp?.toDate()).toUTCString()}</span>
            </h4>
            {message}
        </div>
    </div>
  )
}

export default Message
