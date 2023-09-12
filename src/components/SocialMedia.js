import React from 'react';
import { Icon } from '@iconify/react';

import '../styles/components/socialMedia.scss';

export default function SocialMedia() {
  return (
    <section className="social-media">
      <a href="https://www.linkedin.com/in/renanbotasse/" target="_blank" rel="noopener noreferrer" className="home-icon">
        <Icon icon="akar-icons:linkedin-fill" />
      </a> 
      <a href="https://github.com/renanbotasse" target="_blank" rel=" noreferrer" className="home-icon">
        <Icon icon="bi:github" />
      </a> 
    </section>
  )
}
