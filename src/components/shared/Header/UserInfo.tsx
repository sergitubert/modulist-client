import React from 'react';
import { Link } from 'react-router-dom';
import { userStore } from '../../../utils/cookie';

type Props = {
    className?: string;
}

const UserInfo = ({ className }: Props) => {
    const { user } = userStore();

    return (
        <div className={`flex items-center ${className}`}>
            <Link className="hover:text-gray-600" to="/profile">
                <div className="flex items-center">
                    <button className="h-8 w-8 mr-3">
                        <img className="h-full w-full object-cover rounded-full" src={user?.photoUrl} alt="User avatar" />
                    </button>
                    <p className="font-semibold capitalize tracking-wide"> Hi, {user?.name} {user?.surname}!</p>
                </div>
            </Link>
        </div >
    );
}

export default UserInfo;