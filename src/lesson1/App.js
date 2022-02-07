import { useState, useEffect } from "react";
import PasswordInput from "./PasswordInput";
import Header from "./Header";

function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber(number + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("Cleanup");
    };
  }, [setNumber, number]);

  return (
    <div>
      <Header number={number} />
      <h1>Doggy Password!</h1>
      {false && <PasswordInput />}
      <PasswordInput />
    </div>
  );
}

export default App;
