import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import profileIcon from "/src/assets/profile.webp";

import homeIcon from "/src/assets/home.png";
import portfolioIcon from "/src/assets/briefcase.png";
import resumeIcon from "/src/assets/resume.png";
import contactIcon from "/src/assets/mail.png";

import '/src/css/components/Header.css';

function Header() {
    const location = useLocation();
    const isHome = location.pathname === '/Home' || location.pathname === '/';
    const isPortfolio = location.pathname === '/Portfolio';
    const isResume = location.pathname === '/Resume';
    const isContact = location.pathname === '/Contact';

    useEffect(() => {
        let title = 'AM - Home';
        if (isPortfolio) {
            title = 'AM - Portfolio';
        } else if (isResume) {
            title = 'AM - Resume';
        } else if (isContact) {
            title = 'AM - Contact';
        }
        document.title = title;
    }, [isContact, isPortfolio, isResume, location.pathname]);

    return (
        <>
            <header>
                <div>
                    <a className={"info"} href={"/Home"}>
                        <img src={profileIcon} alt={"Website-Logo"}/>
                        <h1>amaurymulcey.fr</h1>
                    </a>
                </div>

                <nav className={"header-navigation"}>
                    <ul className={"header-navigation__List"}>
                        <li>
                            <a className={`header-navigation__Link ${isHome ? 'header-navigation__Link--selected' :''}`} href={"/Home"}>
                                <p>Home</p>
                            </a>
                        </li>
                        <li>
                            <a className={`header-navigation__Link ${isPortfolio ? 'header-navigation__Link--selected' :''}`} href={"/Portfolio"}>
                                <p>Portfolio</p>
                            </a>
                        </li>
                        <li>
                            <a className={`header-navigation__Link ${isResume ? 'header-navigation__Link--selected' :''}`} href={"/Resume"}>
                                <p>Resume</p>
                            </a>
                        </li>
                        <li>
                            <a className={`header-navigation__Link ${isContact ? 'header-navigation__Link--selected' :''}`} href={"/Contact"}>
                                <p>Contact</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header