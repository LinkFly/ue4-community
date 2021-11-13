import styles from '../styles/Navbar.module.scss';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

const navigation = [
  {id: 1, title: 'Home', path: '/'},
  {id: 2, title: 'Posts', path: '/posts'},
  {id: 3, title: 'Contacts', path: '/contacts'},
];

const Navbar: FC = () => {
  const {pathname} = useRouter();
  return (
    <div className={styles.nav}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src={'/logo.png'} width={100} height={100} alt={'webDev'}/>
        </div>
        <div className={styles.links}>
          {navigation.map(({id, title, path}) => (
            <Link key={id} href={path}>
              <a className={pathname === path ? styles.active : undefined}>{title}</a>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
