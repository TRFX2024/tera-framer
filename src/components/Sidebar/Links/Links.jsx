import React from 'react';
import { motion } from 'framer-motion';
const Links = () => {
    const items = ["Inicio", "Home", "Quiénes somos", "Soporte", "Sistema de pórticos", "Revisa rus cámaras", "Contacto"]
    const variants = {
        open: {
            transition:{
                staggerChildren: 0.1,
            },
        },
        closed: {
            transition:{
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    }
    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        closed: {
            y: 50,
            opacity: 0,
        }
    }
    const handleClick = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <motion.div className='links' variants={variants}>
            {
                items.map((item, index) => (
                   <motion.a href={`#${item}`}  key={item} variants={itemVariants} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}} onClick={handleClick}>
                    {item}
                   </motion.a> 
                ))
            }
        </motion.div>
    );
}

export default Links;
