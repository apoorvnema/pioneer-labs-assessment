import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const [isMobile, setMobile] = useState(true);
    const [open, setOpen] = useState(true);
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);
    const sidebarRef = useRef(null);
    const [isButton, setButton] = useState("button1");
    const location = useLocation();

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEndX(e.touches[0].clientX);
    };

    useEffect(() => {
        const pathname = location.pathname;
        switch (pathname) {
            case '/': setButton('button1');
                break;
            case '/population': setButton('button2');
                break;
            case '/crypto': setButton('button3');
                break;
            case '/about': setButton('button4');
                break;
            default: setButton('button1');
                break;
        }
    }, [location.pathname]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
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

    const handleToggle = () => {
        setOpen(!open);
    }

    const handleTouchEnd = () => {
        if (touchStartX && touchEndX) {
            if (touchStartX - touchEndX > 50) {
                setOpen(false);
            }
        }
        setTouchStartX(null);
        setTouchEndX(null);
    };

    const handleSidebarItem = (button) => {
        if (isMobile) setOpen(!open);
    }

    return (
        <>
            <div onClick={handleToggle} className={`hamburger ${open ? 'close' : 'open'} ${isMobile ? 'mobile' : 'desktop'}`}>
                <img src="/hamburger.svg" alt="Hamburger"></img>
            </div>
            <div className={`${open ? 'open' : 'close'} ${isMobile ? 'mobile' : 'desktop'} Sidebar`}>
                <div onClick={handleToggle} className={`left-arrow ${open ? 'open' : 'close'} ${isMobile ? 'mobile' : 'desktop'}`}>
                    <img src="/left-arrow.svg" alt="left-arrow"></img>
                </div>
                <div className='Sidebar-menu'
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    ref={sidebarRef}
                >
                    <h2>PIONEER LABS</h2>
                    <div className='Sidebar-items'>
                        <Link className={`${isButton === "button1" ? "active" : ""} side-btn`} to="/" onClick={() => handleSidebarItem('button1')}>Home</Link>
                        <Link className={`${isButton === "button2" ? "active" : ""} side-btn`} to="/population" onClick={() => handleSidebarItem('button2')}>Population Data</Link>
                        <Link className={`${isButton === "button3" ? "active" : ""} side-btn`} to="/crypto" onClick={() => handleSidebarItem('button3')}>Cryptocurrency Prices</Link>
                        <Link className={`${isButton === "button4" ? "active" : ""} side-btn`} to="/about" onClick={() => handleSidebarItem('button4')}>About</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
