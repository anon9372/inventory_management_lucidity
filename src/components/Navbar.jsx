import React from 'react'
import { useDispatch } from 'react-redux';

import '../styles/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const dispatch = useDispatch();
    const toggleUser = () => {
        dispatch({ type: 'TOGGLE_USER_ROLE' });
    };

    return (
        <section className='navbar'>
                <div className='navbar-user-switch'>
                    <p>Admin</p>
                    <label className="switch">
                        <input type="checkbox" defaultChecked='true' onChange={toggleUser} />
                        <span className="slider round"></span>
                    </label>
                    <p>User</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faRightFromBracket} width={'20px'} height={'20px'} />
                </div>
        </section>
    )
}

export default Navbar