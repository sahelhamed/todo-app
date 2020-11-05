// Node_modules
import React, { ReactElement } from 'react';
// Components
import Index from './containers/ToDos';

const App = (): ReactElement => {
  return (
    <div className="p-6 font-Roboto">
      <Index />
    </div>
  );
};

export default App;
