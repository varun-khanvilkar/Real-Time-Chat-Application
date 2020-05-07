import React from 'react';
import ScrolltoBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import  './Messages.css';
import SideContent from '../SideContent';

const Messages = ({messages,name,users}) => {
   

    
   return (
        <div className="styling">
            <SideContent users={users}/>
            <ScrolltoBottom className="messages">
                {messages.map((message,i) =><div key={i}><Message message={message} name={name}></Message></div>)}
            </ScrolltoBottom>
        </div>
   )
}

export default Messages;