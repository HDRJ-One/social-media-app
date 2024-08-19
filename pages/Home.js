// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';

function Home() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <Feed />
            </div>
        </div>
    );
}

export default Home;
