import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import '/src/css/reset.css';

import App from '/src/App.jsx';

import '/src/css/index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
