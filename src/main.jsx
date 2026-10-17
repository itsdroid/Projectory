import { createRoot } from 'react-dom/client'
import { Provider, useSelector } from 'react-redux';
import store from './app/store.jsx';
import AppRoutes from './app/routes/AppRoutes.jsx';
import './Index.css';


createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <AppRoutes />
  </Provider>
)
