import React from 'react';
import  './SideDrawer.css';

const SideDrawer = ({users ,drawer, closeToggle}) => {
    let attachedClass = ['sideDrawer', 'Close'].join(' ');
    if(drawer) {
        console.log('inside sideDrawer');
        attachedClass = ['sideDrawer', 'Open'].join(' ');
    }

    return (
        <div className={attachedClass}>
            <div className="sideInnerDrawer">
                <i className="fa fa-users group" aria-hidden="true"></i>
                <h1>User's</h1>
                <i className="fa fa-window-close Close-icon" onClick={closeToggle}/>
            </div>
            {
                users 
                 ? (
                    <div className="sideUserList">
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


export default SideDrawer;