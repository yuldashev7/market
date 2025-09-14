import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/main-layout/main-layout';
import Home from './pages/home/home';
import About from './pages/about/about';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
