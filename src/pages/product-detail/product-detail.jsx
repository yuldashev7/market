import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { UseAllQueries } from '../../components/all-queries/use-all-queries';
import ProductDetailSwiper from '../../components/product-detail-swiper/product-detail-swiper';
// import LoadingSkeleton from '../../components/loading-skeleton/loading-skeleton';
import ProductDetailSkeleton from '../../components/loading-skeleton/product-detail-skeleton';
import { useTheme } from '@mui/material/styles';
import CartIcon from '../../assets/icons/cart-icon';

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = UseAllQueries();
  const theme = useTheme();

  const product = data.find((el) => String(el.id) === id);
  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  return (
    <div className="container sm:mt-[50px] md:mt-[70px] lg:mt-[80px]">
      <div className="hidden lg:flex justify-between gap-6 pt-[10px] pb-[20px]">
        <NavLink className="text-sm md:text-base whitespace-nowrap hover:text-primary transition-colors">
          Смартфоны и планшеты
        </NavLink>
        <NavLink className="text-sm md:text-base whitespace-nowrap hover:text-primary transition-colors">
          Ноутбуки, планшеты и компьютеры
        </NavLink>
        <NavLink className="text-sm md:text-base whitespace-nowrap hover:text-primary transition-colors">
          Техника для дома
        </NavLink>
        <NavLink className="text-sm md:text-base whitespace-nowrap hover:text-primary transition-colors">
          Игры и развлечения
        </NavLink>
        <NavLink className="text-sm md:text-base whitespace-nowrap hover:text-primary transition-colors">
          Телевизоры, Аудио-видео, Hi-Fi
        </NavLink>
      </div>
      <div>
        <ProductDetailSwiper />
      </div>
      <div className="lg:flex items-center gap-[80px]">
        <div className="flex items-center lg:items-start lg:gap-[20px]">
          <img
            src={product?.img}
            alt="img"
            className="sm:ml-[-15px] sm:w-[200px] md:w-[300px] lg:w-[400px] h-auto object-contain rounded-lg"
          />

          <div className="flex flex-col gap-[5px] md:gap-[10px] lg:gap-[15px] lg:mt-[30px]">
            <p className="flex whitespace-nowrap sm:gap-[2px] md:gap-[5px]">
              <span className="font-semibold text-primary">Бренд:</span>
              <span className="font-[600]">{product?.brand}</span>
            </p>
            <p className="flex whitespace-nowrap sm:gap-[2px] md:gap-[5px]">
              <span className="font-semibold text-primary">Цвет:</span>
              <span className="font-[600]">{product?.color}</span>
            </p>
            <p className="flex whitespace-nowrap sm:gap-[2px] md:gap-[5px]">
              <span className="font-semibold text-primary">Дисплей:</span>
              <span className="font-[600]">{product?.details?.display}</span>
            </p>
            <p className="flex whitespace-nowrap sm:gap-[2px] md:gap-[5px]">
              <span className="font-semibold text-primary">Частота:</span>
              <span className="font-[600]">{product?.details?.frequency}</span>
            </p>
            <p className="flex whitespace-nowrap sm:gap-[2px] md:gap-[5px]">
              <span className="font-semibold text-primary">Вес:</span>
              <span className="font-[600]">{product?.details?.weight}</span>
            </p>
            <p className="flex whitespace-nowrap sm:gap-[2px] md:gap-[5px]">
              <span className="font-semibold text-primary">Диагональ:</span>
              <span className="font-[600]">{product?.details?.diagonal}</span>
            </p>
          </div>
        </div>
        <div className="sm:py-[20px] border border-secondary rounded-lg sm:flex sm:flex-col sm:items-center sm:w-[325px] sm:gap-[20px] md:gap-[25px] sm:mt-[20px] sm:mb-[100px] sm:mr-auto sm:ml-auto md:min-w-[500px] md:mt-[40px] lg:w-[400px] lg:min-w-[400px]  lg:py-[30px]">
          <span className="font-[600] lg:text-[20px]">0 Сум</span>

          <div className="flex items-center gap-4 border border-secondary sm:py-[2px] sm:px-[2px] rounded-[6px] md:gap-[20px] lg:gap-[25px]">
            <button
              className="sm:w-[70px] md:w-[80px] sm:px-[20px] sm:py-1 md:py-[6px] bg-gray-200 rounded hover:scale-105 active:scale-95 
                   transition-transform duration-200 lg:font-[600] lg:py-[8px] lg:px-[8px] lg:w-[100px]"
            >
              -
            </button>
            <span className="font-[500] lg:font-[600]">1</span>
            <button
              className="sm:w-[70px] md:w-[80px] sm:px-[20px] sm:py-1 md:py-[6px] bg-gray-200 rounded hover:scale-105 active:scale-95 
                   transition-transform duration-200 lg:font-[600] lg:py-[8px] lg:px-[8px] lg:w-[100px]"
            >
              +
            </button>
          </div>

          <button className="bg-blue-500 flex items-center sm:gap-[8px] text-white sm:text-[15px] md:text-[16px] sm:px-3 sm:py-2 md:px-6 md:py-[10px] rounded hover:bg-blue-600 transition lg:px-12 lg:py-[14px] lg:gap-[12px] lg:font-[500]">
            Добавить в корзину
            <span>
              <CartIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
