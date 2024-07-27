import React from 'react'
import Register from './Register'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Message from '../components/Message'
const Home = () => {
  return (
    <div class="home border border-solid border-4 border-custom-green h-full">
        <div className="home-container flex">
            <Sidebar/>

            <Chat/>
            
        </div>
    </div>
  )
}

export default Home
