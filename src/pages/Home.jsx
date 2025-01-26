import profileIcon from "/src/assets/pages/Home/profile.jpg";
import websiteIcon from "/src/assets/pages/Home/website.png";
import githubIcon from "/src/assets/pages/Home/github.png";
import linkedinIcon from "/src/assets/pages/Home/linkedin.png";
import buymeacoffeeIcon from "/src/assets/pages/Home/coffee.png";
import mailIcon from "/src/assets/pages/Home/mail.png";

import { toast } from 'react-toastify';

import '/src/css/pages/Home.css';

function Home() {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            toast("✅ Email copied in your clipboard", {
                className: 'custom-toast',
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                progressClassName: 'custom-toast-progress',
            });
        }).catch(err => {
            console.error("Failed to copy text: ", err);
            toast("❌ We can't copy in your clipboard", {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        });
    };

    return (
        <>
            <main>
                <section id={"top"}>
                    <img src={profileIcon} alt={"Profile-Icon"}/>
                    <h1>Amaury Mulcey</h1>
                    <h2>I live in France and study computer science.</h2>
                </section>

                <section id={"content"}>
                    <ul id={"primaryLinks"}>
                        <li className={"link"}
                            onClick={() => window.open("https://github.com/AmauRizz", "_blank")}
                        >
                            <img src={githubIcon} alt={"Github-Icon"}/>
                            <div>
                                <h3>GitHub</h3>
                                <p>See my projects.</p>
                            </div>
                        </li>
                        <li className={"link"}
                            onClick={() => window.open("https://www.linkedin.com/in/amaury-mulcey-pro/", "_blank")}
                        >
                            <img src={linkedinIcon} alt={"LinkedIn-Icon"}/>
                            <div>
                                <h3>LinkedIn</h3>
                                <p>Connect with me on LinkedIn.</p>
                            </div>
                        </li>
                        <li className={"link"}
                            onClick={() => window.open("https://buymeacoffee.com/amaurizz", "_blank")}
                        >
                            <img src={buymeacoffeeIcon} alt={"Buy-Me-A-Coffee-Icon"}/>
                            <div>
                                <h3>Buy Me a Coffee</h3>
                                <p>Donate me here, if you want.</p>
                            </div>
                        </li>
                    </ul>

                    <ul id={"secondaryLinks"}>
                        <li className={"link"}
                            onClick={() => copyToClipboard("amaury.mulcey.pro@gmail.com")}
                        >
                            <img src={mailIcon} alt={"Mail-Icon"}/>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
}

export default Home;