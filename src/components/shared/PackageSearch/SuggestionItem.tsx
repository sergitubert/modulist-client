import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    highlight: string;
    description: string;
    version: string;
    name: string;
    since: string;
    exactMatch: boolean;
}

const renderExactMatchBadge = () => (
    <span className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">Exact match</span>
)

export const SuggestionItem = ({ description, highlight, version, name, since, exactMatch }: Props) => (
    <Link to={`/package/${name}`}>
        <div className="bg-gray-200  mx-6 hover:bg-gray-100 cursor-pointer border border-gray-300">
            <div className="flex justify-between p-2">
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <p className="inline-block" dangerouslySetInnerHTML={{ __html: highlight }} />{exactMatch && renderExactMatchBadge()}
                    </div>
                    <p className="hidden lg:block truncate text-gray-600">{description}</p>
                    <p className="text-sm font-semibold">{version} - <span className="italic text-gray-400">Last update: {since} ago</span></p>
                </div>
            </div>
        </div>
    </Link>
)