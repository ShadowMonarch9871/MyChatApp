import React from 'react'
import Sidebar from "../Components/Home/Sidebar"
import Chat from '../Components/Home/Chat'


export default function Home() {
  return (
    <div className='Home'>
      <div className='container'>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
    
  )
}
