import React from 'react';
import { userStore } from '../../../utils/cookie';
import { Logo } from '../../ui/Logo';
import SignedInHeader from './SignedInHeader';
import SignedOutHeader from './SignedOutHeader';

export default function Header() {

    const { hasUser } = userStore();
    return (
        <React.Fragment>
            <header className="px-8 py-4">
                <nav className="flex justify-between">
                    <div className="self-center">
                        <Logo />
                    </div>
                    <div>
                        {hasUser ? <SignedInHeader /> : <SignedOutHeader />}
                    </div>
                </nav>
            </header>
            <hr />
        </React.Fragment >
    );
}