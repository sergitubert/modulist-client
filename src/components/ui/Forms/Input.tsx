import React, { InputHTMLAttributes } from 'react';

type Props = {
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({ ...props }) => {
    return (
        <input type="text" className="py-4 px-6 w-full focus:border-indigo-600 hover:indigo-500" {...props} />
    );
}