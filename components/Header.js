// src/components/Header.js
import React from 'react';

function Header() {
    return (
        <header className="flex justify-between p-4 bg-gray-800 text-white">
            <div className="logo">SocialMedia</div>
            <nav>
                <ul className="flex space-x-4">
                    <li>Home</li>
                    <li>Explore</li>
                    <li>Profile</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
