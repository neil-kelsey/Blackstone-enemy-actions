import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './components/TestComponent.jsx';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>
    {title}
    <p>Another test</p>
    <TestComponent />
  </div>,
  document.getElementById('app')
);