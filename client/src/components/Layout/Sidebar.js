import React from 'react'
import { userMenu } from './Menu/userMenu';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Layout.css'

const Sidebar = () => {
    const location = useLocation();
  return (
    <div>
        <div className='sidebar'>
            <div className='menu'>
                {userMenu.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <div className={`menu-item ${isActive && 'active'}`} key={index}>
                            <i className={item.icon}></i>
                            <Link to={item.path}>{item.name}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Sidebar