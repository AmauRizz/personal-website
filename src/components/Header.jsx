import websiteIcon from "/src/assets/pages/Home/website.webp";
import homeIcon from "/src/assets/components/Header/home.webp";
import portfolioIcon from "/src/assets/components/Header/portrait.webp";
import cvIcon from "/src/assets/components/Header/group.webp";

import '/src/css/components/Header.css';

function Header() {
    return (
        <>
            <header>
                <div className={"info"} onClick={ () => window.open( "/", "_self" ) }>
                    <img src={websiteIcon} alt={"Website-Logo"}/>
                    <h1>amaurymulcey.fr</h1>
                </div>

                <nav className={"main-navigation"}>
                    <ul className={"main-navigation__List"}>
                        <li className={"main-navigation__Link"}
                            onClick={() => window.open("/", "_self")}
                        >
                            <img src={portfolioIcon} alt={"Home-Logo"}/>
                            <p>Portfolio</p>
                        </li>
                        <li className={"main-navigation__Link--Active"}
                            onClick={() => window.open("/", "_self")}
                        >
                            <img src={homeIcon} alt={"Portrait-Logo"}/>
                            <p>Home</p>
                        </li>
                        <li className={"main-navigation__Link"}
                            onClick={() => window.open("/", "_self")}
                        >
                            <img src={cvIcon} alt={"Group-Logo"}/>
                            <p>CV</p>
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