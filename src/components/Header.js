
import { useState } from "react";

const Header = () => {
    const [home, setHome] = useState('home')
    const [about, setAbout] = useState('about me page')
    const [services, setServices] = useState('All the services I offer')
    const [client, setClient] = useState('clients')
    const [contact, setContact] = useState('contact')



    return(
        <div className="navbar">
        <h3 className="navbar-name">High Fashion</h3>
        <div className="nav-links">
        <div><a href='/'>Home</a></div>
        <div><a href='/about'>About</a></div>
        <div><a href='/services'>Services</a></div>
        <div><a href='/clients'>Clients</a></div>
        <div><a href='/contact'>Contact</a></div>
        </div>
        </div>
    )
}
export default Header;