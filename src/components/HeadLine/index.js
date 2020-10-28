import React from 'react';
import './style.css';

const HeadLine = (props) => (
      <h2 id={props.id} className="headline text-center text-sm-center text-md-left">{props.title}</h2>
    )

export default HeadLine;