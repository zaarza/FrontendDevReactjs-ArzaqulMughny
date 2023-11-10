import { useParams } from 'react-router-dom';
import Rating from '../../components/Rating';
import style from './index.module.scss';
import Reviews from './Reviews';
import useRestaurantDetails from '../../hooks/useRestaurantDetails';
import Button from '../../components/ui/Button';

const Details = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useRestaurantDetails(id);
    ``;

    if (!isLoading && !error && data !== undefined) {
        return (
            <>
                <div className={style.container}>
                    <div className={style.restaurant}>
                        <div className={style.restaurant__image}>
                            <img
                                src={data.photo.images.original.url}
                                alt=''
                            />
                        </div>
                        <div className={style.restaurant__description}>
                            <div className={style.restaurant__inner}>
                                <div className={style.restaurant__info}>
                                    <span className={style.restaurant__location}>
                                        {data.cuisine && data.cuisine[0].name.toUpperCase()}{' '}
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
                                {data.rating.length > 0 && <Rating rating={data.rating} />}
                                <h1 className={style.restaurant__name}>{data.name}</h1>
                                <p className={style.restaurant__text}>{data.description}</p>

                                <div className={style.reviews}>
                                    <Reviews data={data.reviews} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Details;
