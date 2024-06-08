// Página de registro
import React from 'react';
import Register from '../../components/Register';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const RegisterPage: React.FC = () => (
  <div>
    <Header />
    <main>
      <Register />
    </main>
    <Footer />
  </div>
);

export default RegisterPage;
