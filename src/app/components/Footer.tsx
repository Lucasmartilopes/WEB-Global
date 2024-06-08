import React from 'react';
import styles from '@/app/styles/footerStyles.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <p>Equipe:</p>
    <ul>
      <li>Mirella Germano, RM552777, Turma 1TDSPA</li>
      <li>Matheus Rodrigo da Silva, RM553180, Turma 1TDSPA</li>
      <li>Lucas Martinez Lopes, RM553816, Turma 1TDSPA</li>
    </ul>
  </footer>
);

export default Footer;

