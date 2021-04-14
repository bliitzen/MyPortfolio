import React from 'react';
import { Container } from 'react-bootstrap';
import Content from '../components/Content';

import myFace from '../assets/images/FacePicture.jpg';
import Hero from '../components/Hero';

function AboutPage(props) {

    return(
        <div className="orng">
            <Hero title={props.title} />
            <img src={myFace} alt="myFace" className="face"></img>
            <Content>
                Welcome to my website! I love to code and have recently taken a strong interest in web design. I have been working in React for a few weeks and this portfolio is my first release of a React website!
                There are a lot of cool features in React and I can't wait to put my new skills to the test on a bigger project.

                I am an aspiring software developer with a passion for coding. I'm hardworking, professional and love to have a good time. For any recruiters reading this, I don't mind the grunt work, I want experience! I hope to one day
                start my own business and build a brand that every consumer will love.
            </Content>
        </div>
    );
}

export default AboutPage;