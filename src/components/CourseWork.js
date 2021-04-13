import React from 'react'
import Content from '../components/Content'
import Hero from '../components/Hero'

function CourseWork(props) {
    return(
        <div className="penis">
            <Hero title={props.title} subTitle={props.subTitle} />
            <Content>
                <h1 className="go-bold">Relevant Coursework:</h1>
                <h2>School</h2>
                <h3>    - Data Structures</h3>
                <h3>    - Intro to Python Programming</h3>
                <h3>    - Intro to Computer Systems</h3>
                <h3>    - Information Security and Assurance</h3>
                    
                <h2>Online</h2>    
                <h3>    - Devonnector MERN stack course</h3>    
                <h3>    - React.js codeacademy course</h3>    
            </Content>
        </div>
    );
}

export default CourseWork;