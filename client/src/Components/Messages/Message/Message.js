import React from 'react';
import './Message.css';
import ReactEmoji from 'react-emoji';

const Message = ({name,message :{user,text}}) => {
let currentUser = false;

const named = name.trim().toLowerCase();

if(named === user) {
    currentUser = true;
}

return (
    currentUser ? (
        <div className="messageContainer justifyEnd">
            <p className="sentText pr-10">{named}</p>
            <div className="messageBox backgroundBlue">
                <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
            </div>
        </div>
    ) : (
        <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
                <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10">{user}</p>
        </div>
    )
)

}

export default Message;