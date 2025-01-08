import React, { useContext, useEffect, useState } from 'react'
import './Chat.css'
import LeftSidebar from '../../components/leftsidebar/LeftSidebar'
import ChatBox from '../../components/Chatbox/ChatBox'
import RightSideBar from '../../components/Rightsidebar/RightSideBar'
import { AppContext } from '../../context/AppContext'

const Chat = () => {

  const {chatData, userData} = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
     if(chatData && userData){
       setLoading(false)
     }
  },[chatData,userData])

  return (
    <div className='chat' >
      {
        loading
        ?<p className='loading'>Loading...</p>
        : <div className="chat-container">
        <LeftSidebar/>
        <ChatBox/>
        <RightSideBar/>
      </div>
      }
     
    </div>
  )
}

export default Chat
