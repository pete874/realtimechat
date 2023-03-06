import React from "react";


import './Message.css';

const Message = ({message: {text, user}, name}) => {
    let isSentByCurrentUser = false;


    // checks if user is same as name in messages. Its for changing background blue and text to right side for current user messages
    if (user === name) {
        isSentByCurrentUser = true;
    }

   
    return (
        isSentByCurrentUser
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{name}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{text}</p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{text}</p>
                    </div>
                    <p className="sentText pl-10">{user}</p>
                </div>
            )
    )
}

export default Message;