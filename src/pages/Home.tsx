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
                </div>

                <Restaurants />
            </div>
        </>
    );
};

export default Home;
