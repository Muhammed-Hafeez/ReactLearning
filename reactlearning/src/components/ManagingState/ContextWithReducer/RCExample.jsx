// import React from 'react'
import { AppState } from "./AppState";
import Count from "./Count";
function RCExample() {
  return (
    <div>
      <AppState>
        <h3>Using Context with Reducer</h3>
        <Count />
      </AppState>
    </div>
  );
}

export default RCExample;
