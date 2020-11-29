
import cookie from 'js-cookie';
import create from 'zustand';
import { User } from '../Models/User';

const COOKIE_NAME = 'userID'

export const getCookie = (name: string) => {
    console.log(cookie.get(COOKIE_NAME))
    return cookie.get(name) !== undefined;
}

type UserStore = {
    hasUser: boolean;
    user: User | null;
    change: (has: boolean) => void;
    setUser: (newUser: User) => void;
}
export const userStore = create<UserStore>((set) => ({
    hasUser: getCookie(COOKIE_NAME),
    user: null,
    setUser: (newUser) => set(() => ({ user: newUser })),
    change: (has) => set(() => ({ hasUser: has })),
}));


export function useHasUser() {
    return userStore(state => state.hasUser);
}