import React from 'react';
import './SideContent.css';


const SideContent = ({users}) => {

    return (
        <div className="sidecontainer">
            <div className="innercontainer">
                <i className="fa fa-users group" aria-hidden="true"></i>
                <h1>User's</h1>
            </div>
            {
                users 
                 ? (
                    <div className="user-list">
                        {users.map(({name}) => (             
                            <div key={name} className="list">
                                <i className="fa fa-user-circle icon" aria-hidden="true"></i>
                                {name}
                            </div>
                            ))}
                        
                    </div>
                )   :   null
            }
        </div>
    )

}

export default SideContent;