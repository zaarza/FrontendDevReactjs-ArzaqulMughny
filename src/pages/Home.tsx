import './Home.scss';
import Restaurants from '../components/Restaurant';
import Button from '../components/ui/Button';

const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='header'>
                    <header className='header__inner'>
                        <h1 className='header__title'>Restaurants</h1>
                        <h2 className='header__subtitle'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </h2>
                    </header>

                    <div className='filters'>
                        <p className='filters__by'>Filter by:</p>

                        <div className='filters__inner'>
                            <label className='filter'>
                                <input type='radio' />
                                <span className='filter__label'>Open now</span>
                            </label>

                            <label className='filter'>
                                <select className='filter__select'>
                                    <option selected>Price</option>
                                </select>

                                <svg
                                    className='filter__arrow'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z'></path>
                                </svg>
                            </label>

                            <label className='filter'>
                                <select className='filter__select'>
                                    <option selected>Categories</option>
                                </select>

                                <svg
                                    className='filter__arrow'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z'></path>
                                </svg>
                            </label>
                        </div>

                        <div className='filters__apply'>
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
