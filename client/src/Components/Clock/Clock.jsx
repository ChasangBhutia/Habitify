import React, { useEffect, useState } from 'react'
import "./Clock.css"

const Clock = () => {
 const [time, setTime] =useState(new Date());

 useEffect(()=>{  
  const timer = setInterval(()=>setTime(new Date()),1000);
  return()=>clearInterval(timer)
 },[])
 
  return (
    <section className='clock d-flex justify-content-center align-items-center bg-dark'>
      {time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()}
    </section>
  )
}

export default Clock