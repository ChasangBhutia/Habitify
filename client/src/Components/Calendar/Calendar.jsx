import React from 'react'
import "./Calendar.css"

const Calendar = () => {

    const date = new Date();
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const day = daysOfWeek[date.getDay()];
    const month = monthList[date.getMonth()];
    const today = date.getDate();


    return (
        <section className='position-relative calendar text-center bg-body'>
            <ul className="chain position-absolute">
                <li className="chainItems fs-1"></li>
                <li className="chainItems fs-1"></li>
                <li className="chainItems fs-1"></li>
                <li className="chainItems fs-1"></li>
                <li className="chainItems fs-1"></li>
                <li className="chainItems fs-1"></li>
                <li className="chainItems fs-1"></li>
            </ul>
            <ul className='holes'>
                <li className="holesItems"></li>
                <li className="holesItems"></li>
                <li className="holesItems"></li>
                <li className="holesItems"></li>
                <li className="holesItems"></li>
                <li className="holesItems"></li>
                <li className="holesItems"></li>
            </ul>
            <hr />
            <h3 className='fs-1'>{month}</h3>
            <h2 style={{ fontSize: "6rem" }} className='text-danger'>{today}</h2>
            <h3 className='fs-1'>{day}</h3>
        </section>
    )
}

export default Calendar