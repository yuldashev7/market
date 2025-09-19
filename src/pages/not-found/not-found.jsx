import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const NotFound = () => {
  const theme = useTheme();

  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-center p-6"
      style={{ backgroundColor: theme.palette.background.primary }}
    >
      <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
      <p className="text-lg mb-6">Упс! Страница не найдена.</p>
      <Link
        to="/"
        className="px-6 py-3 rounded-lg font-medium transition-colors bg-primary text-white"
      >
        На главную
      </Link>
    </div>
  );
};

export default NotFound;
