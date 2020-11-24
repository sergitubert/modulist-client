import React from 'react';
import { Layout } from '../shared/Layout/Layout';
import { PackageSearch } from '../shared/PackageSearch/PackageSearch';

export default function Home() {
    return (
        <Layout>
            <div className="max-w-full mt-8">
                <div className="mx-2 md:mx-32">
                    <PackageSearch />
                </div>
            </div>
        </Layout >
    );
}