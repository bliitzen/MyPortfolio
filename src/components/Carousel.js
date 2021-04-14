import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Card from './Card';

import rainbits from '../assets/images/rainbits.jpg';
import pythonPic from '../assets/images/o1ubmk6kh0l01.jpg';
import DungEsc from '../assets/images/DungEsc.PNG';


class Carousel extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            items: [
                {
                    id: 0,
                    title: "My Github",
                    subTitle: "Contains class homeworks / projects",
                    imgSrc: rainbits,
                    link: 'https://github.com/bliitzen',
                    selected: false
                },
                {
                    id: 1,
                    title: "Python Algo Trading Bot (Coming soon)",
                    subTitle: "Final project for my python course, I chose to create an algo trading bot",
                    imgSrc: pythonPic,
                    selected: false
                },
                {
                    id: 2,
                    title: "Dungeon Escape",
                    subTitle: "Simple 2d escape room game",
                    imgSrc: DungEsc,
                    link: 'https://zen-stonebraker-e760eb.netlify.app',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;
        
        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={e => this.handleCardClick(item.id, e)} key={item.id} />
        })
    }

    render() {
        return(
            <div className="orng">
                <Container fluid={true}>
                    <Row className="justify-content-around">
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            </div>
            
        );
    }
}

export default Carousel;