import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../shared/Layout/Layout';
import { PackageSearch } from '../shared/PackageSearch/PackageSearch';
import { ReactComponent as Guy } from './guy.svg';

export default function Home() {
    return (
        <Layout>
            <div className="max-w-full mt-8">
                <div className="mx-2 md:mx-32">
                    <PackageSearch />
                    <div className="pt-16 flex flex-col items-center justify-center">
                        <Guy className="max-h-96" />
                        <div className="mt-8 flex flex-col sm:flex-row">
                            <Link to="/signup" className="sm:mr-1 mb-2 sm:mb-0 inline-block bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:shadow-outline active:bg-indigo-600 text-white px-5 py-3 rounded-lg text-sm shadow-lg uppercase tracking-wider font-semibold sm:text-base">
                                Sign up for free
                            </Link>
                            <Link to="/pro" className="sm:ml-1 inline-block bg-indigo-100 hover:bg-indigo-500 hover:text-indigo-100 focus:outline-none focus:shadow-outline active:bg-indigo-600 text-indigo-500 px-5 py-3 rounded-lg text-sm shadow-lg uppercase tracking-wider font-semibold sm:text-base">
                                Buy me a coffee <span role="img" aria-label="coffee">☕</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    );
}