import React from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { UseAllQueries } from '../../components/all-queries/use-all-queries';
import ProductDetailSwiper from '../../components/product-detail-swiper/product-detail-swiper';

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = UseAllQueries();

  const product = data.find((el) => String(el.id) === id);

  return (
    <div className="container">
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
      <div className="flex flex-col md:flex-row  md:items-start gap-4  md:justify-between sm:justify-center">
        <img
          src={product?.img}
          alt="img"
          className="sm:ml-auto sm:mr-auto sm:w-[200px] md:w-[300px] lg:w-[400px] h-auto object-contain rounded-lg"
        />

        <div className="flex-1 grid gap-2 text-sm md:text-base md:mt-[20px] sm:justify-center md:justify-start lg:gap-[20px] lg:mt-[30px]">
          <p className="flex">
            <span className="font-semibold text-gray-700">Бренд:</span>
            <span className="text-gray-900">{product?.brand}</span>
          </p>
          <p className="flex">
            <span className="font-semibold text-gray-700">Цвет:</span>
            <span className="text-gray-900">{product?.color}</span>
          </p>
          <p className="flex">
            <span className="font-semibold text-gray-700">Дисплей:</span>
            <span className="text-gray-900">{product?.details?.display}</span>
          </p>
          <p className="flex">
            <span className="font-semibold text-gray-700">Частота:</span>
            <span className="text-gray-900">{product?.details?.frequency}</span>
          </p>
          <p className="flex">
            <span className="font-semibold text-gray-700">Вес:</span>
            <span className="text-gray-900">{product?.details?.weight}</span>
          </p>
          <p className="flex">
            <span className="font-semibold text-gray-700">Диагональ:</span>
            <span className="text-gray-900">{product?.details?.diagonal}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
