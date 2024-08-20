import React from 'react'
import { userMenu } from './Menu/userMenu';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Layout.css'
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const location = useLocation();

    const {user} = useSelector((state)=> state.auth);
  return (
    <div>
        <div className='sidebar'>
            <div className='menu'>
                {/* role = organization */}
                {user?.role === 'Organization' && (
                    userMenu.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <div className={`menu-item ${isActive && 'active'}`} key={item.name}>
                            <i className={item.icon}></i>
                            <Link to={item.path}>{item.name}</Link>
                        </div>
                    )
                }))}

                {/* role = Donar */}
                {user?.role === 'Donar' && (
                    <>
                    
                        <div className={`menu-item`} key={user?.role}>
                            <i className={'fa-solid fa-hospital'}></i>
                            <Link to={"/organisation"}>Organization</Link>
                        </div>
                    
                
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Sidebar