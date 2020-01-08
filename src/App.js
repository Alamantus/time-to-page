import React from 'react';

import Header from './components/Header';
import TimeSection from './components/time';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <main className="container-fluid">
      <Header />
      <TimeSection />
    </main>;
  }
}

export default App;