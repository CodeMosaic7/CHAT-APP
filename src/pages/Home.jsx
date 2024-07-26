import React from 'react'
import Register from './Register'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Message from '../components/Message'
const Home = () => {
  return (
    <div class="home">
        <div className="home-container">
            <Sidebar/>
            <Chat/>
            
        </div>
    </div>
  )
}

export default Home
