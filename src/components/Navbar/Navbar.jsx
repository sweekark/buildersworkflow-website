import { navItems } from "../../constants"
import { Spin as Hamburger } from 'hamburger-react'
import "./Navbar.css"
import { useState } from "react"
const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <div className="navbar section_padding">
                <div>Logo</div>
                <div className="nav-sec-2">
                    {navItems.map((item, index) => {
                        return (
                            <div key={index} className="nav-item">
                                {item}
                            </div>
                        )
                    })}
                    <div className="nav-sec-1">
                        Book A Meeting
                    </div>

                </div>
                <div className="menu-but">
                    <Hamburger size={22} toggled={isOpen} toggle={setOpen} />

                </div>
            </div>
            {isOpen && 
                <div className="nav_side">
            {navItems.map((item, index) => {
                        return (
                            <div key={index} className="nav-item">
                                {item}
                            </div>
                        )
                    })}
                    <div className="nav-sec-1">
                        Book A Meeting
                    </div>

            </div>}
        </div>
    )
}

export default Navbar
