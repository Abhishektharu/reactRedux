import { useState } from 'react'
import './App.css'
import {increment, decrement} from './counter/slice'
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
  );
}

export default App
