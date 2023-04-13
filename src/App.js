import { useState } from "react";
import "./App.css";
const url = "https://api.adviceslip.com/advice";

function App() {
  const [advice, setAdvice] = useState("Click and take some advice");

  const fetchAdvice = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const { advice } = data.slip;
    setAdvice(advice);

    // const randomNum = +(Math.floor(Math.random() * 101) + 1);
    // console.log(randomNum);
    // if (randomNum === data.slip.id) {
    //   setAdvice(data.slip);
    //   console.log(data.slip);
    // }
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
