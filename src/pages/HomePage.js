import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import CourseWork from '../components/CourseWork'

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Carousel />
            <CourseWork />
        </div>
        
    );
}

export default HomePage;