import { Link } from 'react-router-dom';
import style from './Restaurant.module.scss';
import Button from './ui/Button';
import useRestaurants from '../hooks/useRestaurants';
import { TRestaurantsData } from '../types/restaurants';
import { useState } from 'react';
import useRestaurantsFilter from '../hooks/useRestaurantsFilter';
import Rating from './Rating';

type TRestaurantCardProps = {
    data: TRestaurantsData;
};

export const RestaurantCardSkeleton = () => {
    return (
        <div className={style.restaurant}>
            <div className={`${style.restaurant__image} ${style['restaurant__image--loading']}`} />
            <div className={`${style.restaurant__name} ${style['restaurant__name--loading']}`} />
            <div className={`${style.restaurant__rating} ${style['restaurant__rating--loading']}`} />
            <div className={`${style.restaurant__more} ${style['restaurant__more--loading']}`} />
        </div>
    );
};

export const RestaurantListSkeleton = ({ amount }: { amount: number }) => {
    const child = [];

    for (let currentCount = 0; currentCount < amount; currentCount++) {
        child.push(<RestaurantCardSkeleton key={currentCount} />);
    }

    return <ul className={style.restaurants__list}>{child}</ul>;
};

export const RestaurantCard = (props: TRestaurantCardProps) => {
    const { data } = props;

    if (!data.name || data.name.length === 0) return false;

    return (
        <div className={style.restaurant}>
            <div className={style.restaurant__image}>
                <img src={data.photo?.images.medium.url} />
            </div>
            <header className={style.restaurant__details}>
                <h1 className={style.restaurant__name}>{data.name}</h1>
            </header>

            <Rating rating={data.rating} />

            <div className={style.restaurant__info}>
                <span className={style.restaurant__location}>
                    {data.cuisine && data.cuisine.length > 0 ? data.cuisine[0].name.toUpperCase() : ''}{' '}
                    <span style={{ fontSize: 6 }}>&#x25CF;</span> {data.price_level}
                </span>
                <span>
                    <span
                        className={`${style.availability} ${
                            style[data.is_closed ? 'availability--closed' : 'availability--open']
                        }`}
                    />
                    {data.is_closed ? 'CLOSED' : 'OPEN NOW'}
                </span>
            </div>

            <div className={style.restaurant__more}>
                <Link to={`/details/${data.location_id}`}>
                    <Button size='full'>LEARN MORE</Button>
                </Link>
            </div>
        </div>
    );
};

type TRestaurantListProps = {
    data?: TRestaurantsData[];
};

const RestaurantList = (props: TRestaurantListProps) => {
    const { data = [] } = props;

    if (data.length === 0) {
        return <p></p>;
    }

    return (
        <ul className={style.restaurants__list}>
            {data &&
                data.length > 0 &&
                data.map((restaurant, index) => {
                    if (!restaurant.name || restaurant.name.length === 0) return;
                    return (
                        <li key={`restaurant-${index}`}>
                            <RestaurantCard data={restaurant} />
                        </li>
                    );
                })}
        </ul>
    );
};

const Restaurants = () => {
    const { restaurants, loadMore, isLoading, category, setCategory } = useRestaurants();
    const [openNow, setOpenNow] = useState<boolean>();
    const [priceRange, setPriceRange] = useState<string>();
    const { filteredRestaurants } = useRestaurantsFilter(restaurants?.data, openNow, priceRange);

    const clearAllFilters = () => {
        setCategory('');
        setOpenNow(undefined);
        setPriceRange(undefined);
    };

    return (
        <>
            <div className={style.filters}>
                <p className={style.filters__by}>Filter by:</p>

                <div className={style.filters__inner}>
                    <label className={style.filter}>
                        <input
                            type='radio'
                            checked={openNow !== undefined && openNow}
                            onChange={() => setOpenNow(!openNow)}
                        />
                        <span className={style.filter__label}>Open now</span>
                    </label>

                    <label className={style.filter}>
                        <select
                            defaultValue={''}
                            className={style.filter__select}
                            onChange={(event) => setPriceRange(event.target.value)}
                            value={priceRange}
                        >
                            <option
                                value=''
                                disabled
                            >
                                Price
                            </option>
                            <option value=''>All</option>
                            <option value='$'>$</option>
                            <option value='$$'>$$</option>
                            <option value='$$$'>$$$</option>
                        </select>

                        <svg
                            className={style.filter__arrow}
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                        >
                            <path d='M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z'></path>
                        </svg>
                    </label>

                    <label className={style.filter}>
                        <select
                            className={style.filter__select}
                            value={category}
                            onChange={(event) => setCategory(event.target.value)}
                        >
                            <option
                                value=''
                                disabled
                            >
                                Categories
                            </option>
                            {restaurants &&
                                Object.keys(restaurants?.filters.restaurant_tagcategory).map((tagCategory) => (
                                    <option
                                        key={tagCategory}
                                        value={tagCategory}
                                    >
                                        {restaurants?.filters.restaurant_tagcategory[tagCategory].label}
                                    </option>
                                ))}
                        </select>

                        <svg
                            className={style.filter__arrow}
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                        >
                            <path d='M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z'></path>
                        </svg>
                    </label>
                </div>

                <div className={style.filters__apply}>
                    <Button
                        variant={'outline'}
                        size={'fit'}
                        onClick={() => clearAllFilters()}
                    >
                        CLEAR ALL
                    </Button>
                </div>
            </div>
            <div className={style.restaurants}>
                <h1 className={style.restaurants__title}>All Restaurants</h1>

                <RestaurantList data={filteredRestaurants} />
                {isLoading && <RestaurantListSkeleton amount={8} />}

                <div style={{ width: '100%', maxWidth: 450, marginInline: 'auto', marginTop: '5em' }}>
                    <Button
                        onClick={() => loadMore()}
                        variant='outline'
                        size='full'
                        style={{ color: 'var(--color-primary)', fontWeight: 600 }}
                    >
                        LOAD MORE
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Restaurants;
