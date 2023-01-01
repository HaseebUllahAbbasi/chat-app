import React, { useEffect, useState } from 'react'
import { chatDataAdmin } from './chatData'
import { chatDataStdDon } from './chatData'
export default function stdChat() 
{
  const [chats,setChats] = useState([])
  let list = [];

  chatDataAdmin.forEach(item=> list.push(item))
  chatDataStdDon.forEach(item=> list.push(item))
  
  useEffect(()=>
  {
     const updatedData =   list.sort((a,b)=> {
      return new Date(a.time)- new Date(b.time);
      });
      setChats([...updatedData])

  },[])

  const role = 'student';
  const id = 1;
  const [message,setMessage] = useState("");
  return (
    <div>
    
      <h1>Student Chat</h1>
      <div className='conatiner'>
          <div >
                {
                  chats.map((item,key)=> {

                   if(item.id == id && item.role == role)
                   {
                    if(item.admin) 
                   return <div  className='d-flex justify-content-start' key={key}> <span className='card p-3' style={{backgroundColor:"lightgreen"}}> {(item.msg)} <span  className='card-footer'> {(item.time.getHours() + ":"+  item.time.getMinutes() + ":" + item.time.getSeconds()  
)} </span></span> </div>
                    else
                    return <div className='d-flex justify-content-end' key={key}> <span className='card p-3' style={{backgroundColor:"lightseagreen"}}> {(item.msg)} <span className='card-footer'> {(item.time.getHours() + ":"+  item.time.getMinutes() + ":" + item.time.getSeconds()  
)} </span></span> </div>
                   }
                  })
                }
          </div>
      </div>
      <div className='row'>
      <div className='col-md-11'>

      <input className='form-control' placeholder='message' value={message} onChange={(e)=>{
          setMessage(e.target.value);
      }} style={{width:"100%"}}/>
      </div>
      <div className='col-md-1'>
                <button className='btn btn-success' onClick={()=>
                {
          const newMsg =               {
        id: 1,
        role: 'student',
        msg: message,
        time: new Date(),
    };
    
            setChats([...chats, newMsg])
                    // alert("add message"+ message)
                }}>
                  Send
                </button>
      </div>
       </div>
    </div>
  )
}
