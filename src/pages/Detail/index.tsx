import Rating from '../../components/Rating';
import style from './index.module.scss';
import Reviews from './Reviews';

const Details = () => {
    return (
        <div className={style.container}>
            <div className={style.restaurant}>
                <div className={style.restaurant__image}></div>
                <div className={style.restaurant__description}>
                    <div className={style.restaurant__inner}>
                        {' '}
                        <div className={style.restaurant__info}>
                            <span className={style.restaurant__location}>
                                SEAFOOD <span style={{ fontSize: 6 }}>&#x25CF;</span> $$$
                            </span>
                            <span>
                                <span className={`${style.availability} ${style['availability--open']}`} />
                                OPEN NOW
                            </span>
                        </div>
                        <Rating />
                        <h1 className={style.restaurant__name}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, id.
                        </h1>
                        <p className={style.restaurant__text}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur accusamus repellat
                            exercitationem. Nulla hic soluta distinctio itaque laborum suscipit, eos quas voluptatem
                            excepturi dolore dolor, necessitatibus, tempora in quia aspernatur.
                        </p>
                    </div>

                    <div className={style.reviews}>
                        <Reviews />
                    </div>
                </div>
            </div>

            <div className={style.map}></div>
        </div>
    );
};

export default Details;
