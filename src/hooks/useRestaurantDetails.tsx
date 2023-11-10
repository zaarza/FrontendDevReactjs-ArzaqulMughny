import { useEffect, useState } from 'react';
import { TRestaurantDetails } from '../types/restaurants';
import { getRestaurantDetails } from '../data/fetcher';
import { redirect } from 'react-router-dom';

const useRestaurantDetails = (id?: string) => {
    if (!id) throw redirect('/');
    const [data, setData] = useState<TRestaurantDetails>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>();

    useEffect(() => {
        setIsLoading(true);
        setData(undefined);
        setError(undefined);

        getRestaurantDetails(id)
            .then((result) => {
                setData(result);
            })
            .catch((error) => setError(error))
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    return { data, isLoading, error };
};

export default useRestaurantDetails;
