import React from 'react'
import "../css/Sidebar.css"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar ,IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons'
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebar__header">
           <div className="sidebar__headerleft"><Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_hVopkv2YCJ7X7CXiTEIVptp3H8uYewdlbBjjR0w=s32-c-mo"/></div>
               <div className="sidebar__headerRight">
                   <IconButton>
                   <DonutLargeIcon/>          
                </IconButton>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
              
                </IconButton>
               
               </div>

           </div>
           <div className="sidebar__search">
               <div className="sidebar__searchContainer"><SearchOutlined/>
               <input type="text" placeholder="Search or start new chat"/>
               </div>
           </div>
           <div className="sidebar__chats">
               <SidebarChat/>
           </div>
        </div>
    )
}

export default Sidebar
