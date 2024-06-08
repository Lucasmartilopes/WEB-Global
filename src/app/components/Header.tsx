import React from 'react';
import Link from 'next/link';
import styles from '@/app/styles/headerStyles.module.css';

const Header: React.FC = () => (
  <header className={styles.header}>
    <h1>Ocean Tech Cleanup</h1>
    <nav>
      <ul>
        <li><Link href="/pages/dashboard">Home</Link></li>
        <li><Link href="/pages/login">Login</Link></li>
        <li><Link href="/pages/register">Register</Link></li>
        <li><Link href="/pages/dashboard">Sobre</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
