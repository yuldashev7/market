import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/main-layout/main-layout';
import Home from './pages/home/home';
import About from './pages/about/about';
import ProductDetail from './pages/product-detail/product-detail';
import NotFound from './pages/not-found/not-found';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
