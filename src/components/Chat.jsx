import React from 'react'
import Message from './Message'
import Input from './Input'
import AllMessages from './AllMessages'
const Chat = () => {
    return (
        <div className='chat'>
            < div className='chatInfo bg-custom-beige'>

                <div className="bg-teal-300 flex justify-between text-custom-green font-bold p-2 ">
                    <span>DHRUVI</span>
                    <div className='chatIcons flex gap-3'>
                        <div>CAM</div>
                        <div>ADD</div>
                        <div>MORE</div>
                    </div>
                </div>
                {/* <img src={Cam} alt="" />
                <img src={Add} alt="" />
                <img src={More} alt="" /> */}
                <div className='flex-grow'>
                    <AllMessages />
                    <AllMessages />
                    <AllMessages />
                    <AllMessages />
                    <AllMessages />
                    <AllMessages />
                </div>
                <div className=''>
                    <Input />
                </div>

            </div>

        </div>
    )
}

export default Chat
