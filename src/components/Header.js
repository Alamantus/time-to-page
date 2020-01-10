import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

const jumbotronStyles = {
  paddingTop: '20px',
  paddingBottom: '0',
  marginBottom: '10px',
};

const Header = (props) => {
  return <header className="jumbotron jumbotron-fluid" style={jumbotronStyles}>
    <div className="container">
      <h1 className="h3">Audiobook Time to Page Calculator</h1>
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
          <li className="nav-item">
            <a href="#" className="btn btn-light" aria-label="Show App Information" title="Show App Information"
              onClick={props.showAppHelp}>
              ?
            </a>
          </li>
        </ul>
      </nav>
    </div>
    {props.appHelpIsShown && (
      <Modal title="App Information" hide={props.hideAppHelp} scrollingBody>
        <p>
          Enter the ending time of the audio recording and the last page number in your text copy on the
          Setup tab, and this app will approximately convert the amount of time you've listened to the
          audiobook into the page you can pick up reading on and vice versa on the Calculator page!
        </p>
        <p>
          You can save the numbers you've entered on the Setup page for later use under a unique name
          so you can pull it up again later without having to type it in each time using the "Save Setup"
          and "Load Setup" buttons at the top of the Setup tab.
        </p>
        <p>
          Click the Question Mark (?) buttons next to each field header to get more information about what
          is expected in that field.
        </p>
        <hr />
        <p>
          Finally, this version of the Time-to-Page calculator was written in React+Redux using Bootstrap 4
          to style it simply to show that I know how to use it. Because this rewrite was so unnecessary,
          I decided to add some extra features to try to make up for the fact that the app went from about
          13KB in size to over 400KB in size... But hey, that's modern web development, for you! All in all,
          that's still actually a lot smaller than I expected.
        </p>
        <p>
          Anyway, I hope you enjoy, and I hope that this tool is useful to you in some way! If you feel
          generous, I would be eternally grateful if you would be willing to donate to my continued open-source
          development exploits through <a href="https://www.buymeacoffee.com/robbieantenesse" target="_blank" rel="noopener">BuyMeACoffee</a> or <a href="https://liberapay.com/robbieantenesse" target="_blank" rel="noopener">LiberaPay</a>!
          If you're interested in my other work, check out my <a href="https://github.com/Alamantus" target="_blank" rel="noopener">GitHub profile</a>,
          where I put most of my work.
        </p>
      </Modal>
    )}
  </header>;
}

Header.propTypes = {
  appHelpIsShown: PropTypes.bool.isRequired,
  showAppHelp: PropTypes.func.isRequired,
  hideAppHelp: PropTypes.func.isRequired,
  setupIsShown: PropTypes.bool.isRequired,
  showSetup: PropTypes.func.isRequired,
  hideSetup: PropTypes.func.isRequired,
}

export default Header;