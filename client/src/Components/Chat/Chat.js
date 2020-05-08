import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import '../Chat/Chat.css';
import Input from '../Input/Input';
import InfoBar from '../InfoBar/InfoBar';
import Messages from '../Messages/Messages';
import SideDrawer from '../SideDrawer';

let socket;

const Chat = ({location}) => {
  const [name,setName] = useState('');
  const [room,setRoom] = useState('');
  const [messages,setMessages] = useState([]);
  const [message,setMessage] = useState('');
  const [users,setUsers] = useState('');
  const [drawer,setDrawer] = useState(false);
  //const ENDPOINT = 'https://react-chat-application-pro.herokuapp.com/';
  const ENDPOINT = 'localhost:5000';
  
  useEffect(() => {
    const {name,room} = queryString.parse(location.search);
    socket = io(ENDPOINT);
    console.log('After connection');
    setName(name);
    setRoom(room);
    socket.emit('join', {name,room},(error) => {   
      if(error) {
        alert(error);
      }
      
    });
    
return () => {
  socket.emit('disconnect');
  socket.off();
}


  },[ENDPOINT,location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      console.log('message');
      setMessages([...messages,message]);
    })
    socket.on("roomData",({users})=>{
      console.log('roomData');
      setUsers(users);
    })
  },[messages]);


  const sendMessage = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  const toggle = (e) => {
    e.preventDefault();
    setDrawer(true);
    console.log('inside toggle');
  }

  const closeToggle = () => {
    setDrawer(prev => !prev);
    console.log('close toggle');
  }



  return (
    <div className="outerContainer">
      <div className="container">
              <SideDrawer 
                users={users}
                drawer={drawer}
                closeToggle={closeToggle}
                />
        
          <InfoBar 
            room={room}
            settoggler={toggle}
          />
          <Messages 
            name={name} 
            messages={messages}
            users={users}
          />
          <Input 
            setMessage={setMessage}
            sendMessage={sendMessage}
            message={message}
          />
      </div>    
    </div>
  );
}

export default Chat;
