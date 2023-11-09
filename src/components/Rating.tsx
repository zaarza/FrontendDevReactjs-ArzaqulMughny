import { Star } from '../shared/Icons';
import RatingStyle from './Rating.module.scss';

const Rating = () => {
    return (
        <div className={RatingStyle.rating}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    );
};

export default Rating;
