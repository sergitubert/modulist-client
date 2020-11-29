import React from 'react';
import { Link } from 'react-router-dom';

const SignedOutHeader = () => (
    <React.Fragment>
        <Link to="/signin" className="hover:text-gray-600 mr-4">
            Sign In
        </Link>
        <Link to="/signup" className="inline-block bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:shadow-outline active:bg-indigo-600 text-white px-5 py-3 rounded-lg text-sm shadow-lg uppercase tracking-wider font-semibold sm:text-base">
            Sign Up
        </Link>
    </React.Fragment>
);

export default SignedOutHeader;