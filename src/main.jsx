import { StrictMode } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router';
import router from './router/router';
import { Provider } from 'react-redux';
import {store} from '../src/redux/store'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
       <RouterProvider router={router} />
    </Provider>
   
  </StrictMode>,
);
