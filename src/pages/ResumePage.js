import React from 'react';
import { Container } from 'react-bootstrap';
import Content from '../components/Content';

import Hero from '../components/Hero';

function ResumePage(props) {

    return(
        <div className="penis">
            <Hero title={props.title} />
            <Content>
                <h1>Searching for Summer 2021 CO-OP</h1>
                <p>To contact me visit contact page</p>
                <br />
                <h1 className="go-bold">Education:</h1>
                <h2>University of Cincinnati, CEAS</h2>
                <p>Pursuing Bachelor of Science - Computer Science</p>
                <br />
                <h2>Dublin Coffman High School</h2>
                <p>Magna Cum Laude, Engineering Academy and Robotics</p>
                <br />
                <h1 className="go-bold">Technical Skills:</h1>
                <h3>Languages: C++, JavaScript, Python, HTML/CSS</h3>
                <h3>Frameworks: React.js, Node.js, Redux, Express</h3>
                <h3>Database: SQL, MongoDB</h3>

            </Content>
        </div>
    );
}

export default ResumePage;