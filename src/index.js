import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import UserContextProvider from './Components/Context/UserContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'



const root = ReactDOM.createRoot(document.getElementById('root'));
let queryClient = new QueryClient();
root.render(
    <QueryClientProvider client={queryClient}>
        <UserContextProvider>
            <App />
        </UserContextProvider>
        <ReactQueryDevtools initialIsOpen='false' position='bottom-right'/>
    </QueryClientProvider>

);

