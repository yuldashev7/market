import { useQueries } from '@tanstack/react-query';
import { request } from '../../config/data/request';

export const UseAllQueries = () => {
  const queries = useQueries({
    queries: [
      {
        queryKey: ['phones'],
        queryFn: () => request.get('/phones').then((res) => res.data),
      },
      {
        queryKey: ['sport'],
        queryFn: () => request.get('/sport').then((res) => res.data),
      },
      {
        queryKey: ['washingM'],
        queryFn: () => request.get('/washingM').then((res) => res.data),
      },
      {
        queryKey: ['computers'],
        queryFn: () => request.get('/computers').then((res) => res.data),
      },
    ],
  });
  const isLoading = queries.some((el) => el.isLoading);
  const IsError = queries.find((el) => el.error);

  const allProducts = queries.flatMap((el) => el.data || []);
  const shuffled = allProducts.sort(() => Math.random() - 0.5);

  return { data: shuffled, isLoading, error: IsError?.error };
};
