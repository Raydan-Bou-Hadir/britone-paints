import React from 'react';

const NavBar = () => {
    return (
        <nav className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
            <div className="text-lg font-bold">Britone Paints</div>
            <ul className="flex space-x-6">
                <li>
                    <a href="#" className="hover:text-blue-200 transition">Home</a>
                </li>
                <li>
                    <a href="#" className="hover:text-blue-200 transition">Products</a>
                </li>
                <li>
                    <a href="#" className="hover:text-blue-200 transition">About</a>
                </li>
                <li>
                    <a href="#" className="hover:text-blue-200 transition">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;