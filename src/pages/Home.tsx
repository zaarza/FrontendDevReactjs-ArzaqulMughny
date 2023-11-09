import HomeStyle from './Home.module.scss';
import Restaurants from '../components/Restaurant';
import Button from '../components/ui/Button';

const Home = () => {
    return (
        <>
            <div className={HomeStyle.container}>
                <div className={HomeStyle.header}>
                    <header className={HomeStyle.header__inner}>
                        <h1 className={HomeStyle.header__title}>Restaurants</h1>
                        <h2 className={HomeStyle.header__subtitle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </h2>
                    </header>

                    <div className={HomeStyle.filters}>
                        <p className={HomeStyle.filters__by}>Filter by:</p>

                        <div className={HomeStyle.filters__inner}>
                            <label className={HomeStyle.filter}>
                                <input type='radio' />
                                <span className={HomeStyle.filter__label}>Open now</span>
                            </label>

                            <label className={HomeStyle.filter}>
                                <select className={HomeStyle.filter__select}>
                                    <option selected>Price</option>
                                </select>

                                <svg
                                    className={HomeStyle.filter__arrow}
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z'></path>
                                </svg>
                            </label>

                            <label className={HomeStyle.filter}>
                                <select className={HomeStyle.filter__select}>
                                    <option selected>Categories</option>
                                </select>

                                <svg
                                    className={HomeStyle.filter__arrow}
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z'></path>
                                </svg>
                            </label>
                        </div>

                        <div className={HomeStyle.filters__apply}>
                            <Button
                                variant={'outline'}
                                size={'fit'}
                            >
                                CLEAR ALL
                            </Button>
                        </div>
                    </div>
                </div>

                <Restaurants />
            </div>
        </>
    );
};

export default Home;
