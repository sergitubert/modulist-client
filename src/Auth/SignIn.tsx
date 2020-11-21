import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TextDivider } from '../shared/TextDivider/TextDivider';

export default function SignIn() {
    return (
        <div className="bg-gray-100 min-h-screen flex">
            <div className="w-1/3 bg-indigo-200 hidden md:block">
                <div className="p-12">
                    <Link to="/">
                        Logo modulist
                    </Link>
                    <div className="mt-6">
                        <h1 className="text-4xl font-semibold text-indigo-900">
                            Discover, organize and share
                            <span className="font-bold">
                                <span className="text-indigo-600"> modu</span>lists.
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-2/3">
                <div className="p-12 flex items-center flex-col">
                    <div className="flex flex-col flex-start">
                        <h1 className="text-2xl font-bold">Sign in to Modulist</h1>
                        <a href="https://www.google.com" className="mt-6 rounded-lg bg-red-600 hover:bg-red-700 border text-red-100 px-20 py-2 text-center">
                            <FaGoogle style={{ display: 'inline-block' }} /> Sign in with google
                        </a>
                        <a href="https://www.github.com" className="mt-1 rounded-lg bg-gray-300 hover:bg-gray-400 border text-gray-900 px-20 py-2 text-center">
                            <FaGithub style={{ display: 'inline-block' }} /> Sign in with github
                        </a>
                        <TextDivider className="my-8" text="or" />
                        <Link to="/signup" className="bg-indigo-800 text-indigo-100 rounded-lg px-4 py-2 hover:bg-indigo-900 text-center">
                            Create an account
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}