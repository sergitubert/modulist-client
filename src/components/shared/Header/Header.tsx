import React from 'react';
import { userStore } from '../../../utils/cookie';
import useBoolean from '../../../utils/useBoolean';
import { Logo } from '../../ui/Logo';
import SignedInHeader from './SignedInHeader';
import SignedOutHeader from './SignedOutHeader';

export default function Header() {

    const { hasUser } = userStore();
    const [navOpen, { toggle: navToggle }] = useBoolean(false);

    return (
        <React.Fragment>
            <header>
                <div className="px-8 py-4 flex justify-between items-center">
                    <Logo />
                    <div className="sm:hidden">
                        <button type="button" onClick={navToggle} className="block text-gray-500 hover:text-gray-400 focus:text-gray-400 focus:outline-none">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {navOpen && <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />}
                                {!navOpen && <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />}
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <div>
                            {hasUser ? <SignedInHeader /> : <SignedOutHeader />}
                        </div>
                    </div>
                </div>

                {navOpen && <div className="sm:hidden py-2 px-4 flex flex-col">
                    {hasUser &&
                        <div>
                            <a href="" className="mb-1 px-4 rounded hover:text-gray-600 hover:bg-gray-100 font-semibold">Profile</a>
                            <a href="" className="mb-1 px-4 rounded hover:text-gray-600 hover:bg-gray-100 font-semibold">My Lists</a>
                        </div>
                    }
                    <a href="" className="mb-1 px-4 rounded hover:text-gray-600 hover:bg-gray-100 font-semibold">Contact</a>
                </div>}

            </header>
            <hr />
        </React.Fragment >
    );
}