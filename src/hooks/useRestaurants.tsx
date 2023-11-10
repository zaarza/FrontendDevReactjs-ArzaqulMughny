import { useEffect, useState } from 'react';
import { TRestaurantsResponse } from '../types/restaurants';
import { getAllRestaurants } from '../data/fetcher';

const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState<TRestaurantsResponse | undefined>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>();
    const [category, setCategory] = useState<string>('');

    useEffect(() => {
        setRestaurants(undefined);
        setIsLoading(true);
        getAllRestaurants(currentPage, category).then((result) => {
            setRestaurants(result);
            setIsLoading(false);
        });
    }, [category]);

    const loadMore = async () => {
        try {
            if (restaurants && parseInt(restaurants.paging.total_results) > restaurants.data.length) {
                setIsLoading(true);
                setCurrentPage(currentPage + 1);
                const { data } = await getAllRestaurants(currentPage + 1, category).then((result) => result);
                const currentRestaurants = restaurants;
                currentRestaurants.data.push(...data);
                setRestaurants(currentRestaurants);
            }
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        restaurants,
        isLoading,
        error,
        loadMore,
        category,
        setCategory,
    };
};

export default useRestaurants;
