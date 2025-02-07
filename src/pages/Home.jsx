import profileIcon from "/src/assets/profile.webp";

import githubIcon from "/src/assets/pages/Home/github.webp";
import linkedinIcon from "/src/assets/pages/Home/linkedin.png";
import buymeacoffeeIcon from "/src/assets/pages/Home/donate.png";

import externalLinkIcon from "/src/assets/external-link2.png";
import intenalLinkIcon from "/src/assets/internal-link.png";

import '/src/css/pages/Home.css';

function Home() {
    document.documentElement.setAttribute('data-theme', 'l');

    return (
        <>
            <main>
                <section className={"main__information"}>
                    <img src={profileIcon} alt={"Profile-Icon"}/>
                    <h1>Amaury Mulcey</h1>
                    <p>I live in France and study computer science.</p>
                </section>

                <section className={"main__content"}>
                    <ul className={"content-external__List"}>
                        <li>
                            <a className={"content-external__Link"} href={"https://github.com/AmauRizz"} target={"_blank"} rel={"noopener noreferrer"}>
                                <div className={"external-link__Info"}>
                                    <img src={githubIcon} alt={"Github-Icon"}/>
                                    <div>
                                        <h2>GitHub</h2>
                                        <p>See my projects.</p>
                                    </div>
                                </div>
                                <img className={"external-link-icon"} src={externalLinkIcon} alt={"External-Link-Icon"}/>
                            </a>
                        </li>
                        <li>
                            <a className={"content-external__Link"} href={"https://www.linkedin.com/in/amaury-mulcey-pro/"} target={"_blank"} rel={"noopener noreferrer"}>
                                <div className={"external-link__Info"}>
                                    <img src={linkedinIcon} alt={"LinkedIn-Icon"}/>
                                    <div>
                                        <h2>LinkedIn</h2>
                                        <p>Connect with me on LinkedIn.</p>
                                    </div>
                                </div>
                                <img className={"external-link-icon"} src={externalLinkIcon} alt={"External-Link-Icon"}/>
                            </a>
                        </li>
                        <li>
                            <a className={"content-external__Link"} href={"https://buymeacoffee.com/amaurizz"} target={"_blank"} rel={"noopener noreferrer"}>
                                <div className={"external-link__Info"}>
                                    <img src={buymeacoffeeIcon} alt={"Buy-Me-A-Coffee-Icon"}/>
                                    <div>
                                        <h2>Buy Me a Coffee</h2>
                                        <p>Donate me here, if you want.</p>
                                    </div>
                                </div>
                                <img className={"external-link-icon"} src={externalLinkIcon} alt={"External-Link-Icon"}/>
                            </a>
                        </li>
                    </ul>

                    <ul className={"content-internal__List"}>
                        <li>
                            <a className={"content-internal__Link"} href={"/Contact"}>
                                <p>Talk to Me</p>
                                <img className={"internal-link-icon"} src={intenalLinkIcon} alt={"Internal-Link-Icon"}/>
                            </a>
                        </li>
                        <li>
                            <a className={"content-internal__Link"} href={"/Portfolio"}>
                                <p>My Works</p>
                                <img className={"internal-link-icon"} src={intenalLinkIcon} alt={"Internal-Link-Icon"}/>
                            </a>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
}

export default Home;