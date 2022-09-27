import React from 'react'
import user from '../assets/images/user.svg'
const Header = () => {
  return (
        <>
            <nav>
                <div className="user">
                    <img src={user} alt="" />
                    <div className="name_status">
                        <p className="user_name">
                        Harpreeti
                        </p>
                        <span className="user_status">
                        Admin
                        </span>
                    </div>
                </div>
            </nav>
        </>
  )
}

export default Header