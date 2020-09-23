// https://medium.com/@celiaongsl/tutorial-how-to-create-a-waterfall-chart-in-recharts-15a0e980d4b?source=friends_link&sk=a1f0bd8f401d79ad9d4b6aae2b412b67
// If you need a tutorial, please view my post above, it'll help you and me out a lot :)!

import React from "react";
import "./styles.css";
import Waterfall from "./Waterfall";

export default function App() {
  return (
    <div className="App">
      
      <h1>The Waterfall Chart</h1>
      <div className="Waterfall">
      <Waterfall />
      </div>
    </div>
  );
}
