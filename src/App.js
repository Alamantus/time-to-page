import React from 'react';

import Header from './components/Header';
import TimeSection from './components/time';
import HelpModal from './components/HelpModal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSetup: true,
    };

    this.showSetup = this.showSetup.bind(this);
    this.hideSetup = this.hideSetup.bind(this);
    this.showHelp = this.showHelp.bind(this);
    this.hideHelp = this.hideHelp.bind(this);
  }

  showSetup () {
    this.setState({ showSetup: true });
  }

  hideSetup () {
    this.setState({ showSetup: false });
  }

  showHelp () {
    this.setState({ showHelp: true });
  }

  hideHelp () {
    this.setState({ showHelp: false });
  }

  render () {
    return <main>
      <Header
        setupIsShown={this.state.showSetup}
        showSetup={this.showSetup}
        hideSetup={this.hideSetup}
        showHelp={this.showHelp}
      />
      {
        this.state.showSetup === true
        ? <div />
        : <TimeSection />
      }
      {this.state.showHelp && <HelpModal hideHelp={this.hideHelp} />}
    </main>;
  }
}

export default App;