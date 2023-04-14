npm import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

const App = () => {
  const [field1, setField1] = useState(null);
  const [field2, setField2] = useState(null);
  const [fieldSum, setFieldSum] = useState(null);

  const onChange1 = (e) => {
    console.log(e.target.value)
    setField1(e.target.value)

  }

  const onChange2 = (e) => {
    console.log(e.target.value)
    setField2(e.target.value)
  }

  useEffect(() => {
    if (field1 !== null && field2 !== null) {
      let sum = parseInt(field1) + parseInt(field2);
      setFieldSum(sum)
    }
  }, [field1, field2]);
  const handleClick = () => {
    setField1('')
    setField2('')
    setFieldSum(null)
  }


  return (
    <div className="App rounded centered">
      <div className="calculator">
        <div className="operation-container centered">
          <div className="element rounded" id="field-1">
            <label className="number-label centered" id="label-1" >{field1}</label>
            <input type="number" value={field1} onChange={onChange1} id="input-1"></input>
          </div>

          <label className="operation-label centered">+</label>

          <div className="element rounded" id="field-2">
            <label className="number-label centered" id="label-2">{field2}</label>
            <input type="number" value={field2} onChange={onChange2} id="input-2"></input>
          </div>

          <label className="operation-label centered">=</label>

          <div className="element rounded" id="field-sum">
            {fieldSum === null || field1 ==='' || field2 ===''
              ? <label className="number-label centered" id="label-nan">:(</label>
              : <label className="number-label centered" id="label-sum" value={fieldSum}>{fieldSum}</label>}

            <label>Sum</label>
          </div>
        </div>
        <div className="buttons centered">
          <button id="clear-button" onClick={handleClick}>clear</button>
        </div>
      </div>

    </div>
  );
}

export default App;
