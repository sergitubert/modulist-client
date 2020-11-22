import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    highlight: string;
    description: string;
    version: string;
    name: string;
}

export const SuggestionItem = ({ description, highlight, version, name }: Props) => (
    <Link to={`/${name}`}>
        <div className="bg-gray-200 border border-gray-300 mx-6 hover:bg-gray-100 cursor-pointer">
            <div className="flex justify-between p-2">
                <div className="w-full">
                    <p dangerouslySetInnerHTML={{ __html: highlight }} />
                    <p className="hidden lg:block truncate overflow-ellipsis overflow-hidden">{description}</p>
                </div>
                <div className="flex items-center">
                    <p>{version}</p>
                </div>
            </div>
        </div>
    </Link>
)