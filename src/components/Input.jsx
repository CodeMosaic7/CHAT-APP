import React from 'react'

const Input = () => {
  return (
    <div className='flex  object-fill justify-evenly'>
        
      <input type="text" placeholder='Type here' className='flex-grow' />
      <div className="Send flex justify-evenly">
        <img src="" alt="" />
        <input type="file"/>
        <label htmlFor="file">
            <img src="" alt="" />
        </label>
        <button>SEND</button>
      </div>
    </div>
  )
}

export default Input
