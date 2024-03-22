import { useState, useEffect } from 'react'
import SideNav from './SideNav'

// const mobileNavItems = document.querySelectorAll(".m_nav_item")
// const hamburger = document.querySelector(".hamburger_div")
// const mobileNav = document.querySelector(".mobile_nav")

// hamburger.addEventListener("click", rotate)
// function rotate() {
// 	hamburger.classList.toggle("rotate")
// 	mobileNav.classList.toggle("slide")
// 	document.body.classList.toggle("noscroll")
// }

// mobileNavItems.forEach(item => {
// 	item.addEventListener("click", rotate)
// })

export default function Header() {

    const [navMenuOpen, setNavMenuOpen] = useState(false)

    function showAndDisableSideNav() {
        const container = document.querySelector('.mobile_nav_container')
        const navMenu = document.querySelector('.mobile_nav')
        const mainEl = document.querySelector('main')

        if (container) {
            if (navMenuOpen) {
                container.classList.add('show')
                navMenu.classList.add('slide')
                mainEl.classList.add('disable-pointer-events')
                document.documentElement.style.overflow = 'hidden'
                document.body.style.overflow = 'hidden'
                
            } else {
                container.classList.remove('show')
                navMenu.classList.remove('slide')
                mainEl.classList.remove('disable-pointer-events')
                document.documentElement.style.overflow = ''
                document.body.style.overflow = ''
            }
        }
    }

    useEffect(() => {
        showAndDisableSideNav()
    }, [navMenuOpen])

    const handleMenuToggle = () => {
        setNavMenuOpen((prevIsNavMenuOpen) => !prevIsNavMenuOpen)
    }

    const handleNavItemClick = () => {
        setNavMenuOpen(false)
    }

    return (
        <div>
            <header className="bkgd_tertiary">
                <div className="content_wrapper flex nav">
                    <svg className="nav_logo">
                            <use href="#kevrog_logo"></use>
                        </svg>
                    <h2 className="nav_name">KEVIN ROGERS</h2>
                    <nav id="intro_nav">
                        <ul id="nav_links">
                            <li><a className="nav_item" href="#top">home</a></li>
                            <li><a className="nav_item" href="#project_section">projects</a></li>
                            <li><a className="nav_item" href="#about_section">about me</a></li>
                        </ul>
                    </nav>
                    <div className={`hamburger_div ${navMenuOpen && 'rotate'}`}>
                        <div className={`hamburger_lines`} onClick={handleMenuToggle}></div>
                    </div>
                </div>
            </header>
            <SideNav 
                navMenuOpen={navMenuOpen}
                setNavMenuOpen={setNavMenuOpen}
                showAndDisableSideNav={showAndDisableSideNav}
                handleNavItemClick={handleNavItemClick}
            />
        </div>
    )
}