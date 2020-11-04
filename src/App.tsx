// Node_modules
import React, { ReactElement } from 'react';
// Components
import Todos from './components/Todos';

const App = (): ReactElement => {
  return (
    <div className="p-6 font-Roboto">
      <Todos />
    </div>
  );
};

export default App;
