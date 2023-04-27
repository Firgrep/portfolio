import React, {Suspense} from 'react';
import Navigation from '../navigation';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../footer';

const Root = () => {
    return (
        <>
            <Navigation />
            <Suspense 
                fallback={<div style={{height: "1000px"}}></div>}
            >
                <Outlet />
            </Suspense>
            <ScrollRestoration />
            <Footer />
        </>
    );
};

export default Root;
