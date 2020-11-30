import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { User } from '../../../Models/User';
import { userStore } from '../../../utils/cookie';
import useBoolean from '../../../utils/useBoolean';
import { Logo } from '../../ui/Logo';
import SignedInHeader from './SignedInHeader';
import SignedOutHeader from './SignedOutHeader';
import UserInfo from './UserInfo';

export default function Header() {

    const history = useHistory();
    const { hasUser, user } = userStore();
    const [navOpen, { toggle: navToggle }] = useBoolean(false);
    const { setHasUser, setUser } = userStore()

    useEffect(() => {

        const checkUser = async () => {
            try {
                const response = await fetch(`/auth/google/user`);
                const userResponse: User = await response.json();
                if (response.status !== 200) throw new Error();
                setHasUser(true)
                setUser(userResponse);
            } catch (error) {
                setHasUser(false);
                history.replace('/')
            }
        }

        checkUser();
    }, [setHasUser, setUser, history]);

    const renderMobileNav = () => (
        navOpen &&
        <nav className="px-2 pt-2 pb-4 sm:hidden sm:p-0">
            <div className="mb-4 px-4">
                <Link to="/" className="block rounded hover:text-indigo-400 text-indigo-500 font-semibold">About</Link>
            </div>
            {hasUser &&
                <div className="px-4 border-t flex flex-col">
                    <div className="mt-4 flex items-center">
                        <UserInfo />
                        <span className="text-indigo-500 font-semibold capitalize tracking-wide">{user?.name} {user?.surname}</span>
                    </div>
                    <Link to="/profile" className="mt-2 hover:text-indigo-400 text-indigo-500 font-semibold" >Profile</Link>
                    <Link to="/" className="mt-2 hover:text-indigo-400 text-indigo-500 font-semibold">My Lists</Link>
                    <a href="/auth/google/logout" className="mt-8">Sign Out</a>
                </div>
            }
        </nav>
    )

    const renderNav = () => (
        <nav className="mr-8">
            <Link to="/" className=" mb-2 px-4 rounded hover:text-indigo-400 text-indigo-500 font-semibold">About</Link>
        </nav>
    )

    return (
        <React.Fragment>
            <header className="">
                <div className="px-8 py-4 flex justify-between items-center">
                    <Logo />
                    <div className="sm:hidden">
                        <button type="button" onClick={navToggle} className="block text-indigo-500 hover:text-indigo-400 focus:text-indigo-400 focus:outline-none">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {navOpen && <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />}
                                {!navOpen && <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />}
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:flex md:items-center">
                        {renderNav()}
                        {hasUser ? <SignedInHeader /> : <SignedOutHeader />}
                    </div>
                </div>

                {renderMobileNav()}

            </header>
            <hr />
        </React.Fragment >
    );
}