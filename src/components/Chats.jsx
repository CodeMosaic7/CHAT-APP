import React from 'react'

const Chats = () => {
    const arr=[
        {
          initial: 'D',
          name: 'Dhruvi',
          msg: 'Hello',
        },
        {
          initial: 'A',
          name: 'Ankit',
          msg: 'Hey, how are you?',
        },
        {
          initial: 'S',
          name: 'Sanjana',
          msg: 'I am good, thank you!',
        },
        {
          initial: 'R',
          name: 'Rohan',
          msg: 'What about you?',
        },
        {
          initial: 'M',
          name: 'Manika',
          msg: 'I am doing well too!',
        },
      ];
  return (
    <div className='chats'>
        {/* <img src="" alt="" /> */}
        {arr.map((msg,index)=>(
            <div key={index} className='chat-message flex gap-4 border border-solid bg-custom-leaf-green text-custom-green'>
                
                <div className='chat-initial w-7'>{msg.initial}</div>
                <div className='chat-content'>
                    <div className='chat-name'>{msg.name}</div>
                    <div className='chat-msg'>{msg.msg}</div>
                    
                </div>
                </div>
        ))}
      
    </div>
  )
}

export default Chats
