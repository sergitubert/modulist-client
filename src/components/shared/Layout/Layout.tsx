import React from 'react';
import Header from '../Header/Header';

export const Layout: React.FC = ({ children }) => {
    return (
        <div className="bg-gray-100 text-gray-900">
            <div className="min-h-screen">
                <Header />
                {children}
            </div>
        </div>
    );
}
