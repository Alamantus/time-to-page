import React from 'react';
import PropTypes from 'prop-types';

const jumbotronStyles = {
  paddingBottom: '0',
  marginBottom: '10px',
};

const Header = (props) => {
  return <header className="jumbotron jumbotron-fluid" style={jumbotronStyles}>
    <div className="container">
      <h1>Audiobook Time to Page Calculator</h1>
      <p>Enter the ending time of the audio recording and the last page number in your text copy, and this app will approximately convert the amount of time you've listened to the audiobook into the page you can pick up reading on and vice versa!</p>
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <button className={'nav-link btn btn-small' + (props.setupIsShown === true && ' btn-primary')}
              onClick={props.showSetup}>
              Setup
            </button>
          </li>
          <li className="nav-item">
            <button className={'nav-link btn btn-small' + (props.setupIsShown === false && ' btn-primary')}
              onClick={props.hideSetup}>
              Calculator
            </button>
          </li>
          <li className="nav-item">
            <button className={'nav-link btn btn-small'}
              onClick={props.showHelp}>
              Help
            </button>
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
  showHelp: PropTypes.func.isRequired,
}

export default Header;