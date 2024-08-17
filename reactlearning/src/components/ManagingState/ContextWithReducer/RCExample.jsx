// import React from 'react'
import { AppState } from "./AppState";
import Count from "./Count";
function RCExample() {
  return (
    <div>
      <AppState>
        <Count />
      </AppState>
    </div>
  );
}

export default RCExample;
