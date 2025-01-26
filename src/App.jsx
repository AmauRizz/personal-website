import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '/src/css/components/Notification.css';

import Header from '/src/components/Header.jsx';
import Home from '/src/pages/Home.jsx';

function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
          <ToastContainer />
      </>
  )
}

export default App
