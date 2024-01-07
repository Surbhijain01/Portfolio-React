import React from 'react'
import { Link } from 'react-router-dom'
import pdf from './Resume.pdf'
const Navbar = ({ themeObj }) => {

    let { theme, setTheme } = themeObj;
    let dark = "navbar navbar-expand-lg navbar-dark bg-dark";
    let light = "navbar navbar-expand-lg navbar-light bg-light";
    //Hooks js varible

    let changeTheme = () => {
        if (theme == "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return (
        <div>
            <nav className={theme == "light" ? light : dark} style={{fontWeight:"700"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">SURBHI JAIN</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/project">PROJECTS</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" target='_blank' href={pdf}>Resume</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">CONTACT US</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">ABOUT US</Link>
                            </li>
                        </ul>

                    </div>
                    <div className="form-check form-switch">
                        <input style={{ width: "50px", height: "30px" }} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changeTheme} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar