import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../../../Models/User';
import { userStore } from '../../../utils/cookie';

const SignedInHeader = () => {
    const history = useHistory();
    const { user, setHasUser, setUser } = userStore()

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
        <div>{user?.name} {user?.surname}</div>
    );
}

export default SignedInHeader;