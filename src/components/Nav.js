import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div>
      <nav style={{fontFamily:'nosifer'}} class="navbar bg-warning m-2 px-4 rounded-1">
            <Link to="/" class="navbar-brand">CRUD operation</Link>
            <div class="nav">
                <Link to="/create-student" class="nav-link text-warning bg-white m-2 rounded-5">Create Student</Link>
                <Link to="/student-list" class="nav-link text-warning bg-white m-2 rounded-5">Student List</Link>
            </div>
        </nav>
    </div>
  )
}

export default Nav
