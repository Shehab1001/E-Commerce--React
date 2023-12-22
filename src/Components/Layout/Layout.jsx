import react from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Offline } from 'react-detect-offline';

export default function Layout() {
    return <>
        <Navbar />
        <div className="container">
            <Outlet></Outlet>
        </div>

    <Offline>
        <div className="network">
            <i className='fas fa-wifi'></i> You're Offline!
        </div>
    </Offline>
    </>
}

