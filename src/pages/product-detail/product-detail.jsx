import React from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { UseAllQueries } from '../../components/all-queries/use-all-queries';
import ProductDetailSwiper from '../../components/product-detail-swiper/product-detail-swiper';
import LoadingSkeleton from '../../components/loading-skeleton/loading-skeleton';
import ProductDetailSkeleton from '../../components/loading-skeleton/product-detail-skeleton';

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = UseAllQueries();

  const product = data.find((el) => String(el.id) === id);
  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

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
      <div className="flex items-center lg:items-start">
        <img
          src={product?.img}
          alt="img"
          className="sm:ml-[-15px] sm:w-[200px] md:w-[300px] lg:w-[400px] h-auto object-contain rounded-lg"
        />

        <div className="flex flex-col gap-[5px] md:gap-[10px] lg:gap-[15px] lg:mt-[30px]">
          <p className="flex whitespace-nowrap">
            <span className="font-semibold ">Бренд:</span>
            <span className="text-product-detail-color">{product?.brand}</span>
          </p>
          <p className="flex whitespace-nowrap">
            <span className="font-semibold text-productDetailColor">Цвет:</span>
            <span className="">{product?.color}</span>
          </p>
          <p className="flex whitespace-nowrap">
            <span className="font-semibold text-protext-productDetailColor">
              Дисплей:
            </span>
            <span className="">{product?.details?.display}</span>
          </p>
          <p className="flex whitespace-nowrap">
            <span className="font-semibold ">Частота:</span>
            <span className="">{product?.details?.frequency}</span>
          </p>
          <p className="flex whitespace-nowrap">
            <span className="font-semibold ">Вес:</span>
            <span className="">{product?.details?.weight}</span>
          </p>
          <p className="flex whitespace-nowrap">
            <span className="font-semibold ">Диагональ:</span>
            <span className="">{product?.details?.diagonal}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
