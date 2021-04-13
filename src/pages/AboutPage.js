import React from 'react';
import { Container } from 'react-bootstrap';
import Content from '../components/Content';

import Hero from '../components/Hero';

function AboutPage(props) {

    return(
        <div className="penis">
            <Hero title={props.title} />
            <Content>
                Welcome to my website! I love to code and have recently taken a strong interest in web design. I have been working in React for some time now and this portfolio is my first release of a React website!
                There are a lot of cool features in React and I can't wait to put my new skills to the test on a bigger project.

                I am an aspiring software developer with a passion for coding. I'm hardworking and professional but love to have a good time. I hope to one day
                start my own business and build a brand that every consumer will love.
            </Content>
        </div>
    );
}

export default AboutPage;