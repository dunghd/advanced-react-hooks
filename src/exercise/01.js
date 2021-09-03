// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

/* 1.
const countReducer = (count, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return count + 1;

    default:
      throw Error(`Don't have this action`);
  }
};
*/

/* 2.
const countReducer = (state, newState) => newState;
*/

/* 3.
const countReducer = (state, action) => {
  console.log(`state`, state, `action`, action);
  return ({ ...state, ...action })
};
*/

/* 5.
const countReducer = (state, action) => {
  console.log(`state`, state, `action`, action);
  return {
    ...state,
    ...(typeof action === 'function' ? action(state) : action)
  };
};
*/

const countReducer = (state, action) => {
  console.log(`state`, state, `action`, action);
  const { type, step } = action
  switch (type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + step
      };

    default:
      throw Error(`Don't have this action`);
  }
};

function Counter({ initialCount = 0, step = 1 }) {
  /* 1.
  const [count, setCount] = React.useReducer(countReducer, initialCount);
  const increment = () => dispatch({ type: 'INCREMENT' })
  */

  /* 2.
  const increment = () => setCount(count + step)
  */

  /* 3.
  const [count, changeCount] = React.useReducer(countReducer, initialCount)
  */

  /* 4.
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const { count } = state

  const increment = () => setState({ count: count + step });

  // const increment = () => setState(
  //   currentState => ({ count: currentState.count + step })
  // )
  */

  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount
  });

  const { count } = state;
  const increment = () => dispatch({ type: 'INCREMENT', step });

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
