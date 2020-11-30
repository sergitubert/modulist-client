import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';
import { userStore } from '../../../utils/cookie';
import useBoolean from '../../../utils/useBoolean';
import UserInfo from './UserInfo';

const SignedInHeader = () => {
    const { user } = userStore()
    const [userDropdownOpen, { toggle, off }] = useBoolean(false);

    return (
        <React.Fragment>
            { user &&
                <div className="relative">
                    <UserInfo onClick={toggle} />
                    {userDropdownOpen &&
                        <OutsideClickHandler onOutsideClick={off}>
                            <div className="bg-white flex flex-col rounded-lg py-2 mt-2 shadow-md w-48 absolute right-0 ">
                                <p className="px-4 py-2 font-semibold capitalize tracking-wide"> Hi, {user?.name} {user?.surname}!</p>
                                <Link to="/profile" className="px-4 mt-2 hover:text-indigo-400 text-indigo-500 font-semibold" >Profile</Link>
                                <Link to="/" className="px-4 mt-2 hover:text-indigo-400 text-indigo-500 font-semibold">My Lists</Link>
                                <a href="/auth/google/logout" className="px-4 mt-8">Sign Out</a>
                            </div>
                        </OutsideClickHandler>
                    }
                </div>
            }
        </React.Fragment>
    );
}

export default SignedInHeader;