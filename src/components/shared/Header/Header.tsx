import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../ui/Logo';

export default function Header() {
    return (
        <React.Fragment>
            <header className="px-8 py-4">
                <nav className="flex justify-between">
                    <div className="self-center">
                        <Logo />
                    </div>
                    <div>
                        <Link to="/signin" className="hover:text-gray-600 mr-4">
                            Sign In
                        </Link>
                        <Link to="/signup" className="inline-block bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:shadow-outline active:bg-indigo-600 text-white px-5 py-3 rounded-lg text-sm shadow-lg uppercase tracking-wider font-semibold sm:text-base">
                            Sign Up
                        </Link>
                    </div>
                </nav>
            </header>
            <hr />
        </React.Fragment >
    );
}