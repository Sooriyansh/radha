import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [mala, setMala] = useState(0);

  // Example: signup state (replace with your actual logic)
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleClick = () => {
    setCounter(prev => prev + 1);
    if ((counter + 1) % 108 === 0) {
      setMala(prev => prev + 1);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-pink-700">🌸 Radha Name Counter 🌸</h1>
      <button
        onClick={handleClick}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg"
      >
        CLICK ME
      </button>

      <div className="mt-4 text-2xl font-semibold text-purple-800">
        {counter}. Shri Radha 🌸
      </div>

      <div className="mt-2 text-xl font-semibold">
        MALA COUNT: {mala}
      </div>
    </div>
  );
}

export default Counter;
