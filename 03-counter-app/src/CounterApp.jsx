import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const sum = () => {
    // we need to leave it outside due to we are changing the prop value
    //value = value + 1; //This will never be rerender but the value will be change
    setCounter(counter + 1);
    //console.log(counter);
  };

  const sus = () => {
    setCounter(counter - 1);
    //console.log(counter);
  };

  const res = () => {
    setCounter(value);
    //console.log(counter);
  };

  return (
    <>
      <h1>CounterApp</h1>
     
      <h2> {counter} </h2>

      <button onClick={(event) => sum(event)}> +1 </button>
      <button onClick={(event) =>  sus(event)}> -1 </button>
      <button onClick={(event) => res(event)}> Reset </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
