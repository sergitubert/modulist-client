import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../../../Models/User';
import { userStore } from '../../../utils/cookie';

const SignedInHeader = () => {
    const history = useHistory();
    const { user, change, setUser } = userStore()

    useEffect(() => {

        const checkUser = async () => {
            try {
                const response = await fetch(`/auth/google/user`);
                const userResponse: User = await response.json();
                if (response.status !== 200) throw new Error();
                change(true)
                setUser(userResponse);
            } catch (error) {
                change(false);
                history.replace('/')
            }
        }

        checkUser();
    }, [change, setUser, history]);

    return (
        <div>{user?.name} {user?.surname}</div>
    );
}

export default SignedInHeader;