import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PackageInfo } from '../../Models/PackageInfo';
import { Layout } from '../shared/Layout/Layout';
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
                    <MarkdownRenderer markdown={packageInfo?.collected.metadata.readme || ''} />
                </div>
            </div>
        </Layout>
    );
}