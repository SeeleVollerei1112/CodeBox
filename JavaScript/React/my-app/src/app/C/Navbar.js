"use client";

import ThemeDropdown from './ThemeDropdown';

const Navbar = ({ handleThemeChange }) => {
    return (
        <div className="relative group flex justify-center w-full z-10">
            <div className="absolute top-0 left-0 w-full h-12 bg-transparent"></div>
            <div className="navbar bg-base-100 glass rounded-full p-2 flex justify-between items-center transition-all duration-300 opacity-0 transform -translate-y-full pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto w-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <ul className="menu menu-horizontal bg-base-200 rounded-box mx-4">
                    <li>
                        <a className="tooltip" data-tip="Home">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="tooltip" data-tip="Details">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="tooltip" data-tip="Stats">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </a>
                    </li>
                </ul>
                <ThemeDropdown handleThemeChange={handleThemeChange} />
            </div>
        </div>
    );
}

export default Navbar;

