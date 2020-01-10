import React from 'react';

import Header from './components/Header';
import SetupSection from './components/SetupSection';
import CalculatorSection from './components/CalculatorSection';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSetup: true,
    };

    this.showSetup = this.showSetup.bind(this);
    this.hideSetup = this.hideSetup.bind(this);
  }

  showSetup () {
    this.setState({ showSetup: true });
  }

  hideSetup () {
    this.setState({ showSetup: false });
  }

  render () {
    return <main>
      <Header
        setupIsShown={this.state.showSetup}
        showSetup={this.showSetup}
        hideSetup={this.hideSetup}
      />
      {
        this.state.showSetup === true
        ? <SetupSection />
        : <CalculatorSection />
      }
    </main>;
  }
}

export default App;