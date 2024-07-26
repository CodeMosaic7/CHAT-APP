import React from 'react'

const Input = () => {
  return (
    <div>
        <hr />
      <input type="text" placeholder='Type here' />
      <div className="Send">
        <img src="" alt="" />
        <input type="file" />
        <label htmlFor="file">
            <img src="" alt="" />
        </label>
        <button>SEND</button>
      </div>
    </div>
  )
}

export default Input
