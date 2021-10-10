import React, {useEffect} from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import ImproveScore from '../../Components/ImproveScore/ImproveScore';
import MobileApp from '../../Components/MobileApp/MobileApp';
import Feedback from '../../Components/Feedback/Feedback';
const Home = () => {
    useEffect(() => {
        document.title = "EngSpace - Home page"
    }, [])
    return (
        <div>
            <Carousel/>
            <ImproveScore/>
            <Feedback/>
        </div>
    );
}

export default Home;
