import React from 'react';
import CardInfo from './CardInfo';

function Card(props) {

    return(
        <div className="d-inline-black g-card" onClick={(e) => props.click(props.item)}>
            <img className="c-card-image" src={props.item.imgSrc} alt="alt"/>
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
        </div>
    );
}

export default Card;