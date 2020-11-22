import React from 'react';
import { useParams } from 'react-router-dom';
export const PackageInfo = () => {
    const { name } = useParams<{ name: string }>();

    return (
        <div>{name}</div>
    );
}