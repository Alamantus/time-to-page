import React from 'react';

import Header from './components/Header';
import SetupSection from './components/SetupSection';
import CalculatorSection from './components/CalculatorSection';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAppHelp: false,
      showSetup: true,
    };
  }

  render () {
    return <main>
      <Header
        appHelpIsShown={this.state.showAppHelp}
        showAppHelp={() => this.setState({ showAppHelp: true })}
        hideAppHelp={() => this.setState({ showAppHelp: false })}
        setupIsShown={this.state.showSetup}
        showSetup={() => this.setState({ showSetup: true })}
        hideSetup={() => this.setState({ showSetup: false })}
      />
      {
        this.state.showSetup === true
        ? <SetupSection />
        : <CalculatorSection />
      }
      <nav className="container-fluid">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            {
              this.state.showSetup === true
              ? (
                <a href="#" className="btn btn-primary" onClick={() => this.setState({ showSetup: false })}>
                  Continue to Calculator &rarr;
                </a>
              ) : (
                <a href="#" className="btn btn-primary" onClick={() => this.setState({ showSetup: true })}>
                  &larr; Go Back to Setup
                </a>
              )
            }
          </li>
        </ul>
      </nav>
    </main>;
  }
}

export default App;