import React from 'react';
import Header from '../Header/Header';

type Props = {
    children: any
}

export default function Layout({ children }: Props) {
    return (
        <div className="bg-gray-100 text-gray-900">
            <div className="min-h-screen">
                <Header />
                {children}
            </div>
        </div>
    );
}