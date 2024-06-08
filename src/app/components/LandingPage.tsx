import React from 'react';
import styles from '../styles/landingPageStyles.module.css';
import Image from 'next/image';
import drone from '@/app/public/drone_aquatico.jpg'

const products = [
  { id: 1, name: 'Produto 1', image: drone, description: 'Descrição do Produto 1' },
  { id: 2, name: 'Produto 2', image: , description: 'Descrição do Produto 2' },
  { id: 3, name: 'Produto 3', image: , description: 'Descrição do Produto 3' },
];

const LandingPage: React.FC = () => {
  return (
    <div className={styles.landingPage}>
      <h2>Bem-vindo ao Ocean Tech Cleanup</h2>
      <p>Nossos produtos são projetados para ajudar a reduzir a poluição nos oceanos.</p>
      <div className={styles.products}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <Image width={80} height={80} src={product.image} alt={product.name} className={styles.productImage} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
