import React, {useState} from 'react';
import '../styles/item.css';

const Item = ({children, question}) => {

    // Expand or collapse the item
    const [expand, setExpand] = useState(false);

    return (
        <div className="accordion-item">
          <div className="item-header">
            <h4>{question}</h4>
            <button onClick={() => setExpand((prevState) => !prevState)}>
              {expand ? <div>&#8211;</div> : "+"}
            </button>
          </div>
          <br/>
          {expand ? <p className="content">{children}</p> : null}
        </div> 
    );
}

export default Item;