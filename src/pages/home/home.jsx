import React from 'react';
import BannerSwiper from '../../components/banner-swiper/banner-swiper';
import { toast } from 'react-toastify';
import { UseAllQueries } from '../../components/all-queries/use-all-queries';
import ListItem from '@mui/material/ListItem';
import LoadingSkeleton from '../../components/loading-skeleton/loading-skeleton';
import { Link } from 'react-router-dom';

const Home = () => {
  const { data, isLoading, error } = UseAllQueries();
  return (
    <section>
      <LoadingSkeleton visible={isLoading} cards={8} />
      <div className="lg:w-[1280px] ml-[auto] mr-[auto]">
        <BannerSwiper />
      </div>
      <div className="container">
        <h1 className="mt-4 sm:mt-6 text-xl sm:text-2xl lg:text-3xl font-semibold lg:font-bold text-gray-800 tracking-wide sm:mb-[10px]">
          Все товары
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {data?.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center rounded-[10px]"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full sm:h-28 md:h-30 object-contain mb-3 lg:h-40"
                />
                <h3 className="text-sm md:text-base font-semibold text-gray-800 text-center line-clamp-1">
                  {product.title}
                </h3>
              </Link>
              <p className="text-xs md:text-sm text-secondary">
                {product.brand}
              </p>
              <p className="mt-2 text-base md:text-lg font-bold text-primary">
                {product.price} Сум
              </p>
              <button className="mt-3 w-full bg-primary text-white text-sm md:text-base py-2 rounded-lg hover:bg-price-btn-hover transition-colors">
                В корзину
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
