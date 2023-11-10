import { Star, StarEmpty, StarHalf } from '../shared/Icons';
import RatingStyle from './Rating.module.scss';

type TRatingProps = {
    rating: string;
};

const Rating = (props: TRatingProps) => {
    const { rating } = props;
    const splitted = rating.split('.');

    const result = [];

    for (let index = 0; index < parseInt(splitted[0]); index++) {
        result.push(<Star key={`fill-${index}`} />);
    }

    if (result.length < 5) {
        for (let index = result.length; index < 5; index++) {
            if (parseInt(splitted[1]) >= 5) {
                result.push(<StarHalf key={`half-${index}`} />);
            } else {
                result.push(<StarEmpty key={`empty-${index}`} />);
            }
        }
    }

    return <div className={RatingStyle.rating}>{result}</div>;
};

export default Rating;
