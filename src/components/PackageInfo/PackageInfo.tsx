import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../shared/Layout/Layout';
export const PackageInfo = () => {
    const { name } = useParams<{ name: string }>();

    return (
        <Layout>
            <div>{name}</div>
        </Layout>
    );
}