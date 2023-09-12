import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import '../styles/pages/projects.scss'
import ReactTooltip from 'react-tooltip';
import disableScroll from 'disable-scroll';

export default function IndividualProject(project) {
  const {name, img, moduleCourse, linkGitHub, linkPage, linkVideo, text, technologies } = project.project;

  const [popupState, setPopupState] = useState(false)

 

  const hidePopup = () => {
    setPopupState(false)
    disableScroll.off(); 
  }

  return (
    <div className='project-individual-thumbnail'>
      <img className='project-img-individual' src={img} />
      <p>{name}</p>
        <div className="project-video-icons">
        <a href={linkGitHub} target="_blank" rel=" noreferrer" className="project-btns">
          <Icon icon="uim:github-alt" className="project-video-icons-i" />
        </a>
        <a href={linkPage} target="_blank" rel=" noreferrer" className="project-btns">
          <Icon icon="bi:eye" className="project-video-icons-i" /> 
        </a>
        <ReactTooltip place="right" className='custom-tooltip' delayHide={300} effect='solid'/>    
        
        </div>
        {popupState ? (
          <section className='popup'>
            <div className='popup-text-video-container'>
              <div className='popup-div-close'>
                <button className='popup-Close' onClick={hidePopup}><i className="bi bi-x-circle popupClose"></i></button>
              </div>
              
              <video src={linkVideo} controls="controls" />

              <div className='popup-informative-text'>
                <p>{name}</p>
                <p>{ moduleCourse }</p>
                <p>{technologies}</p>
                <p className='popup-info-project-text'>{text}</p>
              </div>
              
            </div>
          </section>
        ) : null}
    </div>

    
  )
}
