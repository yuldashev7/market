import React from 'react';
import Header from '../header/header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <header>
        <Header />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
