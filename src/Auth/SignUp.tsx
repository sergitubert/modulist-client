import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TextDivider } from '../shared/TextDivider/TextDivider';
import { AuthLayout } from './Layout/AuthLayout';

export default function SignUp() {
    return (
        <AuthLayout>
            <React.Fragment>
                <h1 className="text-2xl font-bold">Sign up to Modulist</h1>
                <a href="https://www.google.com" className="mt-6 rounded-lg bg-red-600 hover:bg-red-700 border text-red-100 px-20 py-2 text-center">
                    <FaGoogle style={{ display: 'inline-block' }} /> Sign up with google
                        </a>
                <a href="https://www.github.com" className="mt-1 rounded-lg bg-gray-300 hover:bg-gray-400 border text-gray-900 px-20 py-2 text-center">
                    <FaGithub style={{ display: 'inline-block' }} /> Sign up with github
                        </a>
                <TextDivider className="my-8" text="or" />
                <Link to="/signin" className="bg-indigo-800 text-indigo-100 rounded-lg px-4 py-2 hover:bg-indigo-900 text-center">
                    Sign in
            </Link>
            </React.Fragment>
        </AuthLayout>
    );
}