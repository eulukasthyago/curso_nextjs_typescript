import { useRouter } from 'next/router';
import Link from 'next/link';
import { ReactNode } from 'react';

import styles from './Navigation.module.css';

const LINK = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    }
];

type NavAnchor = {
    path: string,
    children: ReactNode
}

function NavAnchor ({ path, children }: NavAnchor){

    return(
        <Link href={path}>
            <a className={styles.navAnchor}>{children}</a>
        </Link>
    )
}

export default function Navigation(){
    const { pathname } = useRouter();
    return(
        <nav>
            <ul className={styles.list}>
                {LINK.map(({name, path}) => (
                    <li key={path}>
                        {path === pathname ?
                            <span>{name}</span>
                        :
                            <NavAnchor path={path}>{name}</NavAnchor>
                        }
                    </li>
                ))}
            </ul>
        </nav>
    )
}