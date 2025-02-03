import { Routes, Route } from 'react-router-dom';

import Header from '/src/components/Header.jsx';
import Home from '/src/pages/Home.jsx';

function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Portfolio" element={<Home />} />
              <Route path="/Resume" element={<Home />} />
              <Route path="/Contact" element={<Home />} />
          </Routes>
      </>
  )
}

export default App
