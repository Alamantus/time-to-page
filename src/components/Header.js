import React from 'react';
import PropTypes from 'prop-types';

const jumbotronStyles = {
  paddingTop: '20px',
  paddingBottom: '0',
  marginBottom: '10px',
};

const Header = (props) => {
  return <header className="jumbotron jumbotron-fluid" style={jumbotronStyles}>
    <div className="container">
      <h1 className="h3">Audiobook Time to Page Calculator</h1>
      <p>
        Enter the ending time of the audio recording and the last page number in your text copy,
        and this app will approximately convert the amount of time you've listened to the audiobook
        into the page you can pick up reading on and vice versa!
      </p>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a href="#" className={'nav-link ' + (props.setupIsShown === true && ' active')}
              onClick={props.showSetup}>
              Setup
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className={'nav-link ' + (props.setupIsShown === false && ' active')}
              onClick={props.hideSetup}>
              Calculator
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>;
}

Header.propTypes = {
  setupIsShown: PropTypes.bool.isRequired,
  showSetup: PropTypes.func.isRequired,
  hideSetup: PropTypes.func.isRequired,
}

export default Header;