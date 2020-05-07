import React from 'react';
import './Input.css';

const Input = ({message, sendMessage, setMessage}) => {
    return (
        <form className="form">
            <input
            type="text"  
            className="input"
            placeholder="Write your message..."
            value={message}
            onChange = {(e) => setMessage(e.target.value)}  
            onKeyPress = {(e) => e.key === 'Enter' ? sendMessage(e) : null} 
        />
        <button className="Sendbutton" onClick={e => sendMessage(e)}>Send</button>
        </form>  
    );
}

export default Input;