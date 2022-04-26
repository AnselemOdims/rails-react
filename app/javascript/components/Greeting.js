import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'
import { fetchGreeting } from '../redux/greetings/reducers/greetingsReducer'

const Greeting = () => {
  const message = useSelector(({greetingReducer}) => greetingReducer.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting())
  }, [])

  return (
    <div>
      <h1>{message}</h1>
      <button>Click me</button>
    </div>
  );
}

Greeting.propTypes = {
  message: PropTypes.string
};
export default Greeting;
