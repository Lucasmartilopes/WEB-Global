import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import LandingPage from '@/app/components/LandingPage';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default Home;
