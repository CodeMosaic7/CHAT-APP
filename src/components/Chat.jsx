import React from 'react'
import Message from './Message'
import Input from './Input'
import AllMessages from './AllMessages'
const Chat = () => {
    return (
        <div className='chat'>
            <div className='chatInfo'>
                <hr />

                <span>Dhruvi</span>
                <div className='chatIcons'>
                    <div>CAM</div>
                    <div>ADD</div>
                    <div>MORE</div>
                    <hr />
                    {/* <img src={Cam} alt="" />
                <img src={Add} alt="" />
                <img src={More} alt="" /> */}
                <AllMessages/>
      <AllMessages/>  
      <AllMessages/>  
      <AllMessages/>  
      <AllMessages/>  
      <AllMessages/> 
                <Input/>
                </div>
            </div>

        </div>
    )
}

export default Chat
