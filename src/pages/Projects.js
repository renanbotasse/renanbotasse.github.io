import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import Header from '../components/Header';
import ListProjects from './ListProjects';

import '../styles/pages/projects.scss';

export default class Projects extends Component {
  render() {
    return (
      <div className="dark-background">
        <div className="header-social-media">
          <Header />
          <section className="header-social-media-section">
          <a href="https://www.linkedin.com/in/renanbotasse/" target="_blank" rel="noopener noreferrer" className="home-icon">
        <Icon icon="akar-icons:linkedin-fill" />
      </a> 
      <a href="https://github.com/renanbotasse" target="_blank" rel=" noreferrer" className="home-icon">
        <Icon icon="bi:github" />
      </a> 
          </section>
        </div>
        <div className="project">
        <section className='project-thumbnail-section'>
          <ListProjects />
        </section>
        
      </div>
      </div>
      
    )
  }
}
