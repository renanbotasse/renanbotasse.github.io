import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Icon } from '@iconify/react';

import '../styles/pages/home.scss';

export default class Home extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div className='all-home'>
        <Header />
          <div className="home">
          
            <section className="home-section home-text-animation">
              <p className="home-name-1">Renan</p>
              <p className="home-name-2">Botasse</p>
              <div className="home-subtitle">
                <p className="home-subtitle-1">Software Developer</p><span>|</span>
                <p className="home-subtitle-2">Crafting Solutions with Code </p><span>|</span>
      <div> 
      <a href="https://www.linkedin.com/in/renanbotasse/" target="_blank" rel="noopener noreferrer" className="home-icon">
        <Icon icon="akar-icons:linkedin-fill" />
      </a> 
      <a href="https://github.com/renanbotasse" target="_blank" rel=" noreferrer" className="home-icon">
        <Icon icon="bi:github" />
      </a> 
      </div>

              </div>
            </section>

          </div>

          <Footer />
      </div>
      
    )
  }
}
