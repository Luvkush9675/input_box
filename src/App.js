import { useState } from "react";
import './App.css';

function InputBox() {
  const [Inputvalue1, SetInputvalue1] = useState('')
  const [Inputvalue2, SetInputvalue2] = useState('')
  const [Inputvalue3, SetInputvalue3] = useState('')
  const [Inputvalue4, SetInputvalue4] = useState('')
  const [totalAdd, setTotal] = useState(0)
  const [totalsubt, setTotal1] = useState(0)
  const [final_Result, setfinal_Result] = useState(0)

  const handleChange1 = (event) => {
    SetInputvalue1(event.target.value);
  }
  const handleChange2 = (event) => {
    SetInputvalue2(event.target.value);
  }
  const handleChange3 = (event) => {
    SetInputvalue3(event.target.value);

  }
  const handleChange4 = (event) => {
    SetInputvalue4(event.target.value);

  }

  const handleSubmit = () => {
    setTotal(parseInt(Inputvalue1) + parseInt(Inputvalue2));
    setTotal1(parseInt(Inputvalue3) + parseInt(Inputvalue4));
    setfinal_Result(parseInt(totalAdd) - parseInt(totalsubt))

  }


  return (
    <div className='container'>
      <h1>Hello Everyone</h1>
      <input
        type="text"
        value={Inputvalue1}
        onChange={handleChange1}

        placeholder="Enter text here"
      />
      {/* <button onClick={handleSubmit}>Submit</button> */}

      <input
        type="text"
        value={Inputvalue2}
        onChange={handleChange2}
        placeholder="Enter text here"
      />
      <p>You typed: {totalAdd}</p>
      <input
        type="text"
        value={Inputvalue3}
        onChange={handleChange3}
        placeholder="Enter text here"

      />

      <input
        type="text"
        value={Inputvalue4}
        onChange={handleChange4}
        placeholder="Enter text here"
      />
      <button onClick={handleSubmit}>Submit</button>

      <p>Total Value is :{totalsubt}</p>
      <p>final result:{final_Result}</p>


    </div>
  );
}

export default InputBox;




