import React from 'react';
import { Link } from 'react-router-dom';
import { useState} from 'react';
import   './Join.css';

const Join = () => {
  const [name,setName] = useState('');
  const [room,setRoom] = useState('');

  return (
    <div className="joinoutercontainer">
      <div className="joininnercontainer">
        <h1 className="heading">Chat Room</h1>
        <input type="text" placeholder="User name" className="joininput" onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Room" className="joininput" onChange={(e) => setRoom(e.target.value)}/>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className="button" type="submit">Sign In</button>
        </Link>  
      </div>      
    </div>
  );
}

export default Join;
