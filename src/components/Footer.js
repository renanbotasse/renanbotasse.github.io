import React from "react";
import { Icon } from '@iconify/react';
import '../styles/components/footer.scss';

class Footer extends React.Component {
  render() {
    return (
    <footer className="footer">
      <Icon icon="ic:baseline-email" />
      <p className="footer-text">renanbotasse@gmail.com</p>
    </footer>
    )
  }
}

export default Footer