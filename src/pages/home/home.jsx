import React from 'react';
import BannerSwiper from '../../components/banner-swiper/banner-swiper';
import { UseAllQueries } from '../../components/all-queries/use-all-queries';
import LoadingSkeleton from '../../components/loading-skeleton/loading-skeleton';
import { Link } from 'react-router-dom';

const Home = () => {
  const { data, isLoading } = UseAllQueries();
  const [visibleCount, setVisibleCount] = React.useState(20);
  const [loadingMore, setLoadingMore] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        !loadingMore &&
        data?.length
      ) {
        setLoadingMore(true);
        setTimeout(() => {
          setVisibleCount((el) => el + 10);
          setLoadingMore(false);
        }, 500);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadingMore, data]);

  if (isLoading) return <LoadingSkeleton visible={true} cards={8} />;

  return (
    <section>
      <div className="lg:w-[1280px] ml-auto mr-auto">
        <BannerSwiper />
      </div>
      <div className="container">
        <h1 className="mt-4 sm:mt-6 text-xl sm:text-2xl lg:text-3xl font-semibold lg:font-bold text-gray-800 tracking-wide sm:mb-[10px]">
          Все товары
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {Array.from({ length: visibleCount }).map((_, index) => {
            const product = data[index % data.length];
            return (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center rounded-[10px] lg:mb-[20px]"
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
            );
          })}
          {/* <div className="relative w-full">
            {loadingMore && (
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-500 text-center bottom-0">
                Загрузка...
              </p>
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
