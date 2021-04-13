import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Card from './Card';

import rainbits from '../assets/images/rainbits.jpg';
import mypic from '../assets/images/mypic.PNG';
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
                    title: "About Me",
                    subTitle: "Learn more about me!",
                    imgSrc: mypic,
                    link: '/about',
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
            <div className="penis">
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