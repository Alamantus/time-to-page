import React from 'react';

import TotalTime from './time/TotalTime';
import FineTuneTime from './time/FineTuneTime';
import TotalPages from './pages/TotalPages';

class SetupSection extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      showFineTuneSection: false,
      showTotalTimePages: false,
      showTotalTimeHelp: false,
      showStartHelp: false,
      showEndHelp: false,
    };

    this.toggleFineTuneSection = this.toggleFineTuneSection.bind(this);
  }

  toggleFineTuneSection () {
    const { showFineTuneSection } = this.state;
    this.setState({ showFineTuneSection: !showFineTuneSection });
  }
  
  render () {
    return <section className="container-fluid">
      <TotalPages
        helpIsShown={this.state.showTotalPagesHelp}
        showHelp={() => this.setState({ showTotalPagesHelp: true })}
        hideHelp={() => this.setState({ showTotalPagesHelp: false })}
      />
      <TotalTime
        helpIsShown={this.state.showTotalTimeHelp}
        showHelp={() => this.setState({ showTotalTimeHelp: true })}
        hideHelp={() => this.setState({ showTotalTimeHelp: false })}
      />
      <FineTuneTime
        isShown={this.state.showFineTuneSection}
        toggle={this.toggleFineTuneSection}
        startHelpIsShown={this.state.showStartHelp}
        showStartHelp={() => this.setState({ showStartHelp: true })}
        hideStartHelp={() => this.setState({ showStartHelp: false })}
        endHelpIsShown={this.state.showEndHelp}
        showEndHelp={() => this.setState({ showEndHelp: true })}
        hideEndHelp={() => this.setState({ showEndHelp: false })}
      />
    </section>;
  }
}

export default SetupSection;