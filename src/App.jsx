import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '/src/css/components/Notification.css';

import Home from '/src/pages/Home.jsx';

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
          <ToastContainer />
      </>
  )
}

export default App
