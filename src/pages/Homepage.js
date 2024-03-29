import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    const highLightSidebar = () => {
        const sidebar = document.querySelector('.Sidebar')
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
                    <Link to="/crypto">Task 4 (Optional): MetaMask Wallet Integration</Link>
                </div>
            </section>
        </div>
    )
}

export default Homepage