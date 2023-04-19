import React from 'react';
import Navigation from '../navigation';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../footer';

const Root = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            <ScrollRestoration />
            <Footer />
        </>
    );
};

export default Root;
