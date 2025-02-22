import React from 'react'
import { Link } from "react-router-dom"
import "./SideMenu.css"
import Calendar from '../Calendar/Calendar'
import Clock from '../Clock/Clock'

const SideMenu = (props) => {
  return (
    <aside className='d-flex flex-column gap-3 justify-content-center align-items-center sideMenu bg-danger f-1'>
      <Calendar />
      <Clock />
      <section className='navigationBtns d-flex flex-column gap-3'>
        <button className='btn btn-primary' onClick={()=>props.setHeroMain("habitTracker")}>Habit Tracker</button>
        <button className='btn btn-primary' onClick={()=>props.setHeroMain("taskManager")}>Task Manager</button>
        <button className='btn btn-primary' onClick={()=>props.setHeroMain("toDoList")}>To-Do List</button>
      </section>
    </aside>
  )
}

export default SideMenu