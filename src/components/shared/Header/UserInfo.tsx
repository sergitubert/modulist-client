import React from 'react';
import { userStore } from '../../../utils/cookie';

type Props = {} & React.HTMLProps<HTMLDivElement>

const UserInfo = ({ className, ...props }: Props) => {
    const { user } = userStore();

    return (
        <div className={`flex items-center ${className}`} {...props}>
            <div className="hover:text-gray-600 flex items-center">
                <button className="h-8 w-8 mr-3">
                    <img className="h-full w-full object-cover rounded-full" src={user?.photoUrl} alt="User avatar" />
                </button>
                <p className="font-semibold capitalize tracking-wide"> Hi, {user?.name} {user?.surname}!</p>
            </div>
        </div >
    );
}

export default UserInfo;