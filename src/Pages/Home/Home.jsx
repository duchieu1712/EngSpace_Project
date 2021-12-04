import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import ImproveScore from '../../Components/ImproveScore/ImproveScore';
import Feedback from '../../Components/Feedback/Feedback';
import { useSelector } from 'react-redux';
import Loading from '../../Components/Loading/Loading';
const Home = () => {
    const { loading } = useSelector((state) => state.courseReducer);
    if(loading){
        return <Loading/>
    }
    return (
        <div>
            <Carousel/>
            <ImproveScore/>
            <Feedback/>
        </div>
    );
}

export default Home;
