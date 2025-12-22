// Dummy TypeScript/React Component
import React from 'react';

interface Props {
  title?: string;
  items?: string[];
}

const MyComponent: React.FC<Props> = ({ title = 'Default Title', items = [] }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );n0
};

export default MyComponent;
