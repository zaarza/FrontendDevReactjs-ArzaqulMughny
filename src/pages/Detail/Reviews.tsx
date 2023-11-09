import Rating from '../../components/Rating';
import style from './Reviews.module.scss';

type TReviewItemProps = {
    data: unknown;
};

const ReviewItem = (props: TReviewItemProps) => {
    const { data } = props;

    return (
        <div className={style.review}>
            <h2 className={style.review__title}>
                Best Tomahawk <span className={style.review__author}> by Naviinnn</span>
            </h2>
            <h3 className={style.review__published_at}>23 November 2023</h3>
            <p className={style.review__summary}>
                Came back after 2 years. Still the best tomahawk in town! Absolutely amazing! Medium rare and they
                grilled in perfectly. Juicy meat and comes with fair price. Other amazing dishes as well such as...
            </p>
            <Rating />
        </div>
    );
};

type TReviewListProps = {
    data: unknown[];
};
const ReviewList = (props: TReviewListProps) => {
    const { data } = props;

    return (
        <ul className={style.reviews__list}>
            {data.map((review, index) => (
                <li key={`review-${index}`}>
                    <ReviewItem data={review} />
                </li>
            ))}
        </ul>
    );
};

const Reviews = () => {
    return (
        <div className={style.reviews}>
            <div className={style.reviews__title}>Reviews</div>
            <ReviewList data={[1, 1, 1, 1]} />
        </div>
    );
};

export default Reviews;
