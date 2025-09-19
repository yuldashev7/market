import Header from '../header/header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../footer/footer';

const MainLayout = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-[100vh]">
      <header>
        <Header />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      {location.pathname !== '/' && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
};

export default MainLayout;
