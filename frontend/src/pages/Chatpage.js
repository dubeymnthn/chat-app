import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Chatpage = () => {

    const [chats,setChats]=useState([]);
    const fetchchats= async()=>{
        const {data} = await axios.get('/api/chats');
        setChats(data);
        console.log(data);
    };
    useEffect(()=>{
        fetchchats();
    },[]);
    
  return (
    <div>
      {chats.map((chat)=>(
        <div key={chat._id}>{chat.chatName}</div>
      )
        )}
    </div>
  )
}

export default Chatpage