import React from 'react';
import './style.css';

const PortfolioSection = (props) => (
      <div id={props.id} className="port-section text-center">
        {props.children}
      </div>
    )

export default PortfolioSection;