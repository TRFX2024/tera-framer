import React from 'react';
import './navbar.css';
import {motion} from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span className='logo'
                    initial={{opacity:0, scale:0.5}}
                    animate={{opacity:1, scale:1}}
                    transition={{duration:1}}
                >Teraflex</motion.span>
            </div>
        </div>
    );
}

export default Navbar;
