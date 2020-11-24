import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PackageInfo } from '../../Models/PackageInfo';
import { Layout } from '../shared/Layout/Layout';
import { PackageSearch } from '../shared/PackageSearch/PackageSearch';
import { MarkdownRenderer } from './MarkdownRenderer';

export const PackagePage = () => {
    const { name } = useParams<{ name: string }>();
    const [packageInfo, setPackageInfo] = useState<PackageInfo>();

    const getPackageInfo = async (packageName: string): Promise<PackageInfo> => {
        const packageNameTrimmed = packageName.trim().toLowerCase();
        const response = await fetch(`https://api.npms.io/v2/package/${packageNameTrimmed}`);
        return await response.json();
    };

    useEffect(() => {
        getPackageInfo(name).then((packageInfo) => setPackageInfo(packageInfo))
    }, [name])

    console.log(packageInfo);

    return (
        <Layout>
            <div className="max-w-full mt-8">
                <div className="mx-2 md:mx-32">
                    <PackageSearch />
                    <div className="mt-6">
                        <h2 className="uppercase text-lg font-extrabold tracking-widest text-gray-800">{packageInfo?.collected.metadata.name}</h2>
                        <p className="text-gray-700 tracking-wide font-light mt-1">{packageInfo?.collected.metadata.description}</p>
                        <div className="mt-4">
                            {packageInfo?.collected.metadata.readme ? <MarkdownRenderer markdown={packageInfo?.collected.metadata.readme} /> : 'The package has no markdown'}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}