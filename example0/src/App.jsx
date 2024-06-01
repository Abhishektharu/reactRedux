import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {increment, decrement} from './actions/index'

function App() {
  const dispatch = useDispatch();
  const selector = useSelector(state: )
  return (

  )
}

export default App
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions';

const App = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default App;
