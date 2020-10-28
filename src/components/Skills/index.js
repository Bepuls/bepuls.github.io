import React from 'react';
import Skill from '../Skill';
import './style.css';
import '../app.css';

const Skills = (props) => (
  <div className="skills-div box-border mx-auto text-center">
    <p className="skills-title text-center text-sm-center text-md-left">{props.skillGroup['title']}</p>
    {props.skillGroup['skills-list'].map(skill => (
            <Skill key={skill.id} skill={skill.skill} skillName={skill.skillName} />
          ))}
  </div>   
)

export default Skills;