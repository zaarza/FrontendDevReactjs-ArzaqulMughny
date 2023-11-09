import { Link } from 'react-router-dom';
import { Star } from '../shared/Icons';
import RestaurantStyle from './Restaurant.module.scss';
import Button from './ui/Button';

export const RestaurantCard = () => {
    return (
        <div className={RestaurantStyle.restaurant}>
            <div className={RestaurantStyle.restaurant__image}></div>
            <header className={RestaurantStyle.restaurant__details}>
                <h1 className={RestaurantStyle.restaurant__name}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet ex consectetur officia iusto
                    culpa!
                </h1>
            </header>

            <div className={RestaurantStyle.restaurant__rating}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>

            <div className={RestaurantStyle.restaurant__info}>
                <span className={RestaurantStyle.restaurant__location}>
                    SEAFOOD <span style={{ fontSize: 6 }}>&#x25CF;</span> $$$
                </span>
                <span>
                    <span className={`${RestaurantStyle.availability} ${RestaurantStyle['availability--open']}`} />
                    OPEN NOW
                </span>
            </div>

            <Link to='/details/1'>
                <Button size='full'>LEARN MORE</Button>
            </Link>
        </div>
    );
};

type TRestaurantListProps = {
    data: unknown[];
};

const RestaurantList = (props: TRestaurantListProps) => {
    const { data } = props;

    return (
        <ul className={RestaurantStyle.restaurants__list}>
            {data.map((restaurant, index) => (
                <li key={`restaurant-${index}`}>
                    <RestaurantCard />
                </li>
            ))}
        </ul>
    );
};

const Restaurants = () => {
    return (
        <div className={RestaurantStyle.restaurants}>
            <h1 className={RestaurantStyle.restaurants__title}>All Restaurants</h1>

            <RestaurantList data={[1, 1, 1, 1, 1]} />

            <div style={{ width: '100%', maxWidth: 450, marginInline: 'auto', marginTop: '5em' }}>
                <Button
                    variant='outline'
                    size='full'
                    style={{ color: 'var(--color-primary)', fontWeight: 600 }}
                >
                    LOAD MORE
                </Button>
            </div>
        </div>
    );
};

export default Restaurants;
