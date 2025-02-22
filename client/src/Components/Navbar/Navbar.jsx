import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className='ps-5 px-5 justify-content-between bg-warning d-flex align-items-center'>
            <h1 className='navbar-brand fs-2'>Habitify</h1>
            <section className="navBtnList  d-flex gap-3 align-items-center">
                <Link to="/dashboard">
                    <button className="navBtns btn btn-dark">Profile</button>
                </Link>
                <Link to="/login">
                    <button className="navBtns btn btn-outline-dark">Login</button>
                </Link>
            </section>
        </nav>
    )
}

export default Navbar