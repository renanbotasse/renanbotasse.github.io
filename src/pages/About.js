import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Icon } from '@iconify/react';
import hardSkillsIcons from '../data/hardSkillsIcons';
import image from '../assets/portfolio-img.jpg';

import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';

import '../styles/pages/about.scss';


export default class About extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div className="all-about">
        <Header />
        <section className="about">
          <div className="about-header-text-skills" >
            
            <div className="about-text-skills">
              <section className="about-text">
                <p className="about-text-p about-text-p-1">Hello,</p>
                
                <p className="about-text-p about-text-p-2">my name is <span> Renan</span>!</p>
                
                <p className="about-text-p about-text-p-3">I am a Software Developer with a focus on <span>web development and back-end</span>.</p>
                
                <p className="about-text-p about-text-p-3">Currently improving my proficiency in <span>ReactJS</span> and <span>Node.js</span>. Also working with <span>MongoDB</span>,<span> noSQL</span>, <span> GraphQL</span> and other technologies.</p>
                
                <p className="about-text-p about-text-p-5">Beyond languages and tools, my real fascination is with the <span>development process</span>. I am always studying architecture, design patterns, cloud computing, cybersecurity and more.</p>

                <p className="about-text-p about-text-p-4">I am based in <span>Portugal</span> and hold both <span>European</span> (Italian) and <span>Brazilian</span> citizenships.</p>
                
              </section>
              <div className="about-image">
            <img className="about-img" src={image} alt="profile" /> 
          </div>
              <section className="about-skills">
                <p className="about-skills-p">SKILLS</p>
                <div className="about-skill">
                {hardSkillsIcons.map((icon, index) => (
                    <div key={index} className="about-div-icon">
                      <Icon icon={icon.icon} className={icon.className} />
                    <p className='about-icon-text'>{icon.title}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            
          </div>
          
          <SocialMedia />
        </section>
        
      </div>
      
    )
  }
}