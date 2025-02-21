import {Route, Routes} from "react-router-dom";

import BackgroundScene from "./BackgroundScene.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <>
            <BackgroundScene />
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/#About" element={<Home />} />
                <Route path="/#Projects" element={<Home />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
