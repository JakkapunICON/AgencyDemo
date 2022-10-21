import { v4 as uuidv4 } from 'uuid';

export const HEADER_MENU = [
    {
        id: uuidv4(),
        href: '/',
        title: 'หน้าแรก'
    },
    {
        id: uuidv4(),
        href: '/pre-owned',
        title: 'มือสอง'
    },
    {
        id: uuidv4(),
        href: '/rent',
        title: 'เช่า'
    },
    {
        id: uuidv4(),
        href: '/about',
        title: 'เกี่ยวกับเรา'
    },
    {
        id: uuidv4(),
        href: '/contact',
        title: 'ติดต่อเรา'
    }
];
