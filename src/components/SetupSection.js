import React from 'react';

import TotalTime from './time/TotalTime';
import FineTuneTime from './time/FineTuneTime';
import TotalPages from './pages/TotalPages';

class SetupSection extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      showFineTuneSection: false,
    };

    this.toggleFineTuneSection = this.toggleFineTuneSection.bind(this);
  }

  toggleFineTuneSection () {
    const { showFineTuneSection } = this.state;
    this.setState({ showFineTuneSection: !showFineTuneSection });
  }
  
  render () {
    return <section className="container-fluid">
      <TotalPages />
      <TotalTime />
      <FineTuneTime
        isShown={this.state.showFineTuneSection}
        toggle={this.toggleFineTuneSection}
      />
    </section>;
  }
}

export default SetupSection;