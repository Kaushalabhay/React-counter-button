import React, { useState } from 'react'

export default function App() {
  const [value , setValue] = useState(5);


  const subValue = () => {
    if(value === 0){
      return;
    }else{
      setValue(value-1);
    }
};
  
  const addValue = () => {
    setValue(value + 1);
};

  return (
    <div>
      <button onClick={addValue}>+</button>
      <h3>{value}</h3>
      <button onClick={subValue}>-</button>

    </div>
  )
}
