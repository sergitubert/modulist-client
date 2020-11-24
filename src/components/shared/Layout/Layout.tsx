import React from 'react';
import Header from '../Header/Header';

export const Layout: React.FC = ({ children }) => {
    return (
        <React.Fragment>
            <div className="bg-gray-50 text-gray-900">
                <div className="statusbar mt-6 md:mt-0" />
                <div className="min-h-screen">
                    <Header />
                    {children}
                </div>
            </div>
        </React.Fragment>

    );
}
