import { request } from '../../../config/data/request';
import { useQuery } from '@tanstack/react-query';

export const getSwiper = () => {
  return useQuery({
    queryKey: ['swiper'],
    queryFn: () => request.get('/banners').then((res) => res.data),
  });
};
