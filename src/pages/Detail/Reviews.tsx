import Rating from '../../components/Rating';
import { TRestaurantReview } from '../../types/restaurants';
import style from './Reviews.module.scss';

type TReviewItemProps = {
    data: TRestaurantReview;
};

const ReviewItem = (props: TReviewItemProps) => {
    const { data } = props;

    return (
        <div className={style.review}>
            <h2 className={style.review__title}>{data.title}</h2>
            <p className={style.review__author}> by {data.author}</p>
            <h3 className={style.review__published_at}>{new Date(data.published_date).toLocaleDateString()}</h3>
            <p className={style.review__summary}>{data.summary}</p>
            <Rating rating={data.rating} />
        </div>
    );
};

type TReviewListProps = {
    data: TRestaurantReview[];
};
const ReviewList = (props: TReviewListProps) => {
    const { data } = props;

    return (
        <>
            <ul className={style.reviews__list}>
                {data.map((review, index) => (
                    <li key={`review-${index}`}>
                        <ReviewItem data={review} />
                    </li>
                ))}
            </ul>
        </>
    );
};

type TReviewsProps = {
    data: TRestaurantReview[];
};
const Reviews = (props: TReviewsProps) => {
    const { data } = props;

    return (
        <div className={style.reviews}>
            <div className={style.reviews__title}>Reviews</div>
            <ReviewList data={data} />
        </div>
    );
};

export default Reviews;
