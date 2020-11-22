import React, { InputHTMLAttributes } from 'react';

type Props = {
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({ ...props }) => {
    return (
        <input type="text" className="py-4 px-6 w-full focus:outline-none focus:ring-indigo-600 focus:ring-1 rounded-full" {...props} />
    );
}