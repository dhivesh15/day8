import React from "react";
import { Link, Outlet } from "react-router-dom"
import  './Layout.css'
export default function Layout(){
    return (
      <div>
        <nav>
            <ul className="nav-bar">
                <li>
                    <Link 
                    className="nav-link"
                    to="/">Home</Link>
                </li>
                <li>
                    <Link
                    className="nav-link"
                    to="/about">About</Link>
                </li>
                <li>
                    <Link
                    className="nav-link"
                    to="/conatact">Conatact</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
      </div>
    )
  }

