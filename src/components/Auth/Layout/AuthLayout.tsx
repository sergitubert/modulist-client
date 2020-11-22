import React from 'react';
import { Link } from 'react-router-dom';

export const AuthLayout: React.FC = ({ children }) => {
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
                        {children}
                    </div>

                </div>
            </div>
        </div>
    );
}