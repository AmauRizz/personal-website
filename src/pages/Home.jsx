import LazyLoad from 'react-lazyload';

import arrowDown from '/src/assets/arrow-down.png';

import '/src/css/pages/Home.css';

function Home() {
    return (
        <>
            <main className={"portfolio"}>
                <section className={"portfolio__home"}>
                    <div className={"home__presentation"}>
                        <p className={"presentation__subtitle"}>WELCOME TO MY PORTFOLIO</p>
                        <h1 className={"presentation__title"}>Hello, World! I'm <span className={"home__text-color"}>Amaury</span>.👋</h1>
                        <div>
                            <p className={"presentation__description"}>STUDENT & FREELANCE</p>
                        </div>
                    </div>

                    <div className={"home__scroll"}>
                            <p className={"scroll__title"}>🚧 More will Come! 🏗️</p>
                            <img className={"scroll__img"} src={arrowDown} alt={"Arrow-Down-Icon"}/>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;