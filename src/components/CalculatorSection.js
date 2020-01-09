import React from 'react';

import ListenedTime from './time/ListenedTime';
import CurrentPage from './pages/CurrentPage';

const CalculatorSection = () => {
  return <section className="container-fluid">
    <ListenedTime />
    <CurrentPage />
  </section>;
}

export default CalculatorSection;