import React,{useState} from 'react'
import { Avatar,IconButton } from '@material-ui/core'
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon"
import "../css/Chat.css"
import { AttachFile, SearchOutlined,MoreVert } from '@material-ui/icons';
import MicIcon from "@material-ui/icons/Mic"
import axios from "../axios"
function ChatBar({messages}) {
    const [input, setInput] = useState("");
    
    const sendMessage=async(e)=>{
        e.preventDefault();
  await axios.post('/messages/new',{
       message:input,
       name:"demo name",
       timestamp:"just now",
       received:false
   })

setInput("")
    }
    return (
        <div className="chat">
       <div className="chat__header">
            <Avatar/>
            <div className="chat__headerInfo">
                <h3>Room name</h3>
                <p>last seen ...</p>

            </div>
    <div className="chat__headerRight">
            <IconButton>
               <SearchOutlined/>          
            </IconButton>
            <IconButton>
            <AttachFile/>
            </IconButton>
            <IconButton>
            <MoreVert/>
            </IconButton>
            </div>
        </div> 
        <div className="chat__body">
            {messages.map((message)=>( <p className={`chat__message ${message.received && "chat__reciever"}`}>
              <span className="chat__name">{message.name}</span>  
                {message.message}
                <span className="chat__timestamp">
                    {message.timestamp}
                </span>
                </p>))}
           
              

                
        </div>
        <div className="chat__footer">
        <InsertEmotionIcon/>
        <form>
            <input type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder="Type a message"/>
            <button type="submit" onClick={sendMessage}>Send</button>
        </form>
        <MicIcon/>
        </div>
    </div>
    )
}

export default ChatBar
