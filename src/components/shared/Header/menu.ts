
interface MenuItem {
    label: string;
    path: string;
    authenticated: boolean;
}

const menu: MenuItem[] = [
    {
        label: 'Profile',
        path: '/profile',
        authenticated: true,
    },
    {
        label: 'My Lists',
        path: '/lists',
        authenticated: true,
    },
    {
        label: 'Contact',
        path: '/contact',
        authenticated: false,
    }
];

export default menu;