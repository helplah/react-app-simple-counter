import React from "react";
import Counter from "./Counter";
import "../styles/App.css";

const counters = [
  { id: "123", initialCount: 0 },
  { id: "345", initialCount: -10 },
  { id: "234", initialCount: 9 },
  { id: "562", initialCount: 2 }
];

// Index can be used only if array does not push or pop
const counterItems = counters.map(counter => {
  return <Counter key={counter.id} count={counter.initialCount} />;
});

const App = () => {
  return (
    <div className="counter">
      <h1>React Simple Counter</h1>
      {counterItems}
    </div>
  );
};

export default App;
