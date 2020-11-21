import React from 'react';
import './TextDivider.css';

type Props = {
    text: string;
}

export const TextDivider: React.FC<Props & React.HTMLAttributes<HTMLParagraphElement>> = ({ text, className }) => {
    return (
        <p className={`divider line one-line text-gray-900 ${className}`}> { text}</p >
    )
}