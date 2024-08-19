// src/components/Sidebar.js
import React from 'react';

function Sidebar() {
    return (
        <aside className="w-64 bg-gray-100 p-4">
            <ul>
                <li>Home</li>
                <li>Explore</li>
                <li>Profile</li>
                <li>Upload</li>
            </ul>
        </aside>
    );
}

export default Sidebar;
