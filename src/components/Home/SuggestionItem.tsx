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
                <div>
                    <div>
                        <p dangerouslySetInnerHTML={{ __html: highlight }} />
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
                <div>
                    <p>{version}</p>
                </div>
            </div>
        </div>
    </Link>
)