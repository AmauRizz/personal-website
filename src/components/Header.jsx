import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import '/src/css/components/Header.css';

function Header() {
    const location = useLocation();
    const isAbout = location.hash === '#About';
    const isProjects = location.hash === '#Projects';
    const isHome = location.pathname === '/' && !(isProjects || isAbout);
    const isContact = location.pathname === '/Contact';

    useEffect(() => {
        let title = 'Portfolio - Amaury Mulcey';
        if (isContact) {
            title = 'Contact - Amaury Mulcey';
        }
        document.title = title;
    }, [isContact, location.pathname]);

    return (
        <>
            <header>
                <a href={"/"}>
                    <LazyLoad>
                        <igm src={""} alt={"Website-Logo"}/>
                    </LazyLoad>
                </a>

                <nav>
                    <ul>
                        <li>
                            <a href="/">
                                <p>Home</p>
                            </a>
                        </li>
                        <li>
                            <a href="/#About">
                                <p>About</p>
                            </a>
                        </li>
                        <li>
                            <a href="/#Projects">
                                <p>Projects</p>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div>
                    <a href="/Contact">
                        <p>Contact</p>
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header