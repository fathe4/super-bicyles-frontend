import React from 'react';
import Banner from '../Banner/Banner';
import NewArrivalsProducts from '../NewArivalProducts/NewArivalProducts';
import Testimonial from '../Testimonial/Testimonial';
import WeProvide from '../WeProvide/WeProvide';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WeProvide></WeProvide>
            <NewArrivalsProducts></NewArrivalsProducts>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;