import React from 'react';
import { Layout } from '../shared/Layout/Layout';
import { Input } from '../ui/Forms/Input';

export default function Home() {
    return (
        <Layout>
            <div className="max-w-full mt-8">
                <div className="mx-2 md:mx-32">
                    <Input placeholder="Search..." />
                </div>
            </div>
        </Layout >
    );
}