import React from 'react';
import Item from './Item';
import '../styles/accordion.css';

const Accordion = (props) => {

    const itemComponents = props.items.map((item, index) => {
      return (
        <Item question={item.question} key={index+item.question}>
          {item.answer}
        </Item>
      )
    });
    return (
      <div className="accordion">
        <div className="title-container">
          <h3>{props.title}</h3>
        </div>
        <div className="item-container">
          <br />
          <br />
          {itemComponents}
        </div>
      </div>
    );
}

export default Accordion;