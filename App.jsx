// App.jsx
import React from 'react';
import Greeting from './Greeting'; // Make sure the path is correct

const App = () => {
  return (
   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Greeting name="Yasmeen" />
    </div>
  );
};

export default App;
