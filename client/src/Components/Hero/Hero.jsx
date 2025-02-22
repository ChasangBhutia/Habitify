import React, { useState } from 'react'
import "./Hero.css"
import SideMenu from '../SideMenu/SideMenu'
import HabitTracker from '../HabitTracker/HabitTracker'
import ToDoList from '../ToDoList/ToDoList'
import TaskManager from '../TaskManager/TaskManager'

const Hero = () => {
  const [heroMain, setHeroMain] = useState("habitTracker");


  return (
    <div className='hero d-flex'>
        {heroMain==="habitTracker"&&<HabitTracker/>}
        {heroMain==="toDoList"&&<ToDoList/>}
        {heroMain==="taskManager"&&<TaskManager/>}
        <SideMenu setHeroMain={setHeroMain}/>
    </div>
  )
}

export default Hero