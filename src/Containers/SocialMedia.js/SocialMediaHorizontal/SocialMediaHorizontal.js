import React from 'react'

function SocialMediaHorizontal() {
    return (
        <div className="mobile-only">
            <div className="footer-icons">
                <ul className="navbar-nav ">
                    <li className="nav-item inline-block">
                        <a href="https://github.com/YashMalik1/" aria-label="Github" className="nav-link text-github">
                            <i className="fa fa-github"></i>
                        </a>
                    </li>
                    <li className="nav-item inline-block">
                        <a href="https://www.instagram.com/_yashmalik/" aria-label="Insagram" className="nav-link">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>

                    <li className="nav-item inline-block">
                        <a href="https://www.linkedin.com/in/yashkrmalik/" aria-label="LinkedIn" className="nav-link">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default SocialMediaHorizontal
