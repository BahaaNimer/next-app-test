import React from 'react';
import Link from 'next/link';
import styles from '../styles/Main.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.nav}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/posts'>Posts</Link>
      </ul>
    </div>
  );
};

export default Navbar;
