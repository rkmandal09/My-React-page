// Dummy React App
import React from 'react';
import './index.css';

function App() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div className="container">
      <h1>Welcome to My React Page</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default App;
