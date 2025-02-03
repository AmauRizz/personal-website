import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import '/src/css/reset.css';
import '/src/css/themes.css';
import '/src/css/index.css';

import App from '/src/App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
