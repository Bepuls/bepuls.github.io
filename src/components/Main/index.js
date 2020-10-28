import React, { Component } from 'react';
import HeroImg from './desktop13.jpg';
import ClientSideSkills from '../../json/clientSideSkills.json'
import ServerSideSkills from '../../json/serverSideSkills.json'
import OtherSkills from '../../json/otherSkills.json'
import ProjectList from '../../json/projectList.json'
import EducationList from '../../json/educationList.json'
import ExperienceList from '../../json/experienceList.json'
import ContactList from '../../json/contactList.json'
import ResumeList from '../../json/resumeList.json'
import HeadLine from '../HeadLine';
import PortfolioSection from '../PortfolioSection'
import Hero from '../Hero'
import './style.css';
import About from '../About';
import Skills from '../Skills';
import Contacts from '../Contacts';
import Project from '../Project';
import Education from '../Education';
import Experience from '../Experience';
import Resume from '../Resume';

class Main extends Component {

  render() {
    return (
      <section id="content-wrapper">
        <div id="header" className="fixed-top text-center">
          <a id="header-link" href="#hero">
          <span id="header-title">Myles Carey</span>
          <span id="header-sub-title">Full Stack Web Developer / Programmer-Analyst</span>

          </a>
          <div className="col-lg-12">
            <button id="sidebar-toggle" className="navbar-brand"><i className="fa fa-bars"
               onClick={ (e) => this.props.onClickSideNav(e)}></i>
            </button>
          </div>
        </div>
        <div className="row main-section" onClick={ () => this.props.onClickMain()}>
          <div className="col-lg-12">
            <Hero heroimg={HeroImg} />
            <PortfolioSection id="about">
              <HeadLine id="about" title={'Full Stack Web Developer / Programmer Analyst'} />
              <About />
            </PortfolioSection>
            <PortfolioSection id="skills">
              <HeadLine title={'Skills'} />
              <Skills skillGroup={ClientSideSkills}/>
              <Skills skillGroup={ServerSideSkills}/>
              <Skills skillGroup={OtherSkills}/>
            </PortfolioSection>
            <PortfolioSection id="projects" >
              <HeadLine title={'Projects'} />
              <div className="container-fluid">
                <div className="row align-items-center">
                    {ProjectList.map(project => (
                      <Project 
                        key={project.id} 
                        title={project.title} 
                        img={project.img}
                        description={project.description}
                        tech={project.tech}
                        extLink={project.extLink}
                        extLinkIcon={project.extLinkIcon}
                        noLink={project.noLinkClass}
                        repoLink={project.repoLink}
                        repoLinkIcon={project.repoLinkIcon}
                        linkDesc={project.linkDesc}
                        repoDesc={project.repoDesc}
                      />
                    ))}
                </div>
              </div>
            </PortfolioSection>
            <PortfolioSection id="education">
              <HeadLine title={'Education'} />
              {EducationList.map(education => (
                <Education 
                  key={education.id} 
                  school={education.school} 
                  city={education.city} 
                  img={education.img}
                  description={education.description}
                  year={education.year}
                />
              ))}
            </PortfolioSection>
            <PortfolioSection id="experience">
              <HeadLine title={'Experience'} />
              {ExperienceList.map(experience => (
                <Experience 
                  key={experience.id} 
                  company={experience.company} 
                  date={experience.date}
                  role={experience.role}
                  bullet1={experience.bullet1}
                  bullet2={experience.bullet2}
                  bullet3={experience.bullet3}
                  bullet4={experience.bullet4}
                />
              ))}
            </PortfolioSection>
            <PortfolioSection id="contact">
              <HeadLine title={'Contact'} />
              <Contacts contactList={ContactList}/>
              </PortfolioSection>
            <PortfolioSection id="resume">
              <HeadLine title={'Resume'} />
              <Resume 
                name={ResumeList[0].name}
                icon={ResumeList[0].icon}
                tooltip={ResumeList[0].tooltip}
                url={ResumeList[0].url}/>
            </PortfolioSection>
          </div>
        </div>
      </section>
    )
  } 
}
export default Main