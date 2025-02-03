import profileIcon from "/src/assets/profile.webp";

import '/src/css/components/Header.css';

function Header() {
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
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
                            <a className={"header-navigation__Link header-navigation__Link--selected"} href={"/Home"}>
                                <p>Home</p>
                            </a>
                        </li>
                        <li>
                            <a className={"header-navigation__Link"} href={"/Portfolio"}>
                                <p>Portfolio</p>
                            </a>
                        </li>
                        <li>
                            <a className={"header-navigation__Link"} href={"/Resume"}>
                                <p>Resume</p>
                            </a>
                        </li>
                        <li>
                            <a className={"header-navigation__Link"} href={"/Contact"}>
                                <p>Contact</p>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className={"parameters"}>

                </div>
            </header>
        </>
    )
}

export default Header