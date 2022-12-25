import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import Card from './Card';
import CardImage from './CardImage';
import Carousel from './Carousel';
import Chat from './Chat';
import FoodCard from './FoodCard';
import ImageCard from './ImageCard';
import Menu from './Menu';
import Reserve from './Reserve';
import ReserveBanner from './ReserveBanner';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Banner></Banner>
            <Banner2></Banner2>
            <FoodCard></FoodCard>
            <CardImage></CardImage>
            <Menu></Menu>
            <ReserveBanner></ReserveBanner>
            <Reserve></Reserve>
            <ImageCard></ImageCard>
            <Card></Card>
            <Chat></Chat>

        </div>
    );
};

export default Home;