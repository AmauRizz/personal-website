import '/src/css/components/Footer.css';

function Home() {
    let date = new Date(); // Penser à mettre à jour la date

    return (
        <>
            <footer className={"footer"}>
                <p className={"footer__copyright"}>Copyright &copy; {date.getFullYear()} - Amaury Mulcey - All rights reserved.</p>
            </footer>
        </>
    );
}

export default Home;