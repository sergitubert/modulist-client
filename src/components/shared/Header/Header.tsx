import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../ui/Logo';

export default function Header() {
    return (
        <React.Fragment>
            <header className="flex justify-between px-8 py-6">
                <Logo />
                <div>
                    <nav>
                        <Link to="/signin" className="hover:text-gray-600">
                            Sign In
                    </Link>
                        <Link to="/signup" className="bg-indigo-900 text-indigo-100 rounded-lg px-4 py-2 hover:bg-indigo-700 ml-4">
                            Sign Up
                    </Link>
                    </nav>
                </div>
            </header>
            <hr />
        </React.Fragment>
    );
}