import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    const [isMobile, setMobile] = useState(true);
    const [isOpen, setOpen] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setOpen(false);
                setMobile(true);
            }
            else {
                setOpen(true);
                setMobile(false);
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const highLightSidebar = () => {
        const sidebar = document.querySelector('.Sidebar')
        if (isMobile && !isOpen) {
            sidebar.classList.remove('close')
            sidebar.classList.add('open')
            setTimeout(() => sidebar.classList.add('close'), 1000);
        }
        sidebar.classList.add('highlight')
        setTimeout(() => sidebar.classList.remove('highlight'), 200);
    }

    return (
        <div className='Homepage Content'>
            <h1>Welcome!</h1>
            <p>Thank you for conducting the Frontend Developer Assessment.</p>
            <section>
                <h2>Tasks Overview</h2>
                <div className='button-group'>
                    <Link onClick={highLightSidebar}>Task 1: Side Navigation Bar</Link>
                    <Link to="/population">Task 2: Graph Population Data</Link>
                    <Link to="/crypto">Task 3: Cryptocurrency Prices Display</Link>
                </div>
            </section>
        </div>
    )
}

export default Homepage