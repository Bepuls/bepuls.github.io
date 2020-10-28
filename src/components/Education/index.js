import React from 'react';
import './style.css';
import '../app.css';

const Education = (props) => (
      <div className="education-box box-border d-inline-block">
            <div className="logo float-left">
              <img className="img-flui logo-img" src={process.env.PUBLIC_URL + props.img} alt={props.school}></img>
            </div>
            <div className="school">
              <p className="education-city">{props.school} - {props.city}</p>
              <p className="education-type">{props.description} - {props.year}</p>
            </div>
      </div>   
    )

export default Education;