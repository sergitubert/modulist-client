import React, { useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useHistory } from 'react-router-dom';
import { User } from '../../../Models/User';
import { userStore } from '../../../utils/cookie';
import useBoolean from '../../../utils/useBoolean';
import UserInfo from './UserInfo';

const SignedInHeader = () => {
    const history = useHistory();
    const { user, setHasUser, setUser } = userStore()
    const [userDropdownOpen, { toggle, off }] = useBoolean(false);

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

    return (
        <React.Fragment>
            { user &&
                <div className="relative">
                    <UserInfo onClick={toggle} />
                    {userDropdownOpen &&
                        <OutsideClickHandler onOutsideClick={off}>
                            <div className="bg-white flex flex-col rounded-lg py-2 mt-2 shadow-md w-48 absolute right-0 ">
                                <a href="" className="px-4 py-2 hover:bg-gray-50">Profile</a>
                                <a href="" className="px-4 py-2 hover:bg-gray-50">My Lists</a>
                                <a href="" className="px-4 py-2 hover:bg-gray-50">Contact</a>
                            </div>
                        </OutsideClickHandler>
                    }
                </div>
            }

        </React.Fragment>
    );
}

export default SignedInHeader;