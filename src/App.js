import React from 'react';
import { connect } from 'react-redux';

import { checkTime } from './store/actionCreators/time';

const mapStateToProps = (state) => {
  return {
    currentTime: state.time.currentTime,
  };
};

const mapDispatchToProps = { checkTime };

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <main>
      <header>
        <h1>Audiobook Time to Page Calculator</h1>
        <p>Enter the ending time of the audio recording and the last page number in your text copy, and this app will approximately convert the amount of time you've listened to the audiobook into the page you can pick up reading on and vice versa!</p>
      </header>
      <section>
        <h2>Current Time</h2>
        <p>{this.props.currentTime.toString()}</p>
        <p><button onClick={() => this.props.checkTime()}>Check Time</button></p>
      </section>
    </main>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);