import React, { useState } from "react";

function Signup({ setUser }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, username };

    try {
      const res = await fetch("https://radha-d10l.onrender.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log(result);
      setUser(result);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-lg w-80 space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border rounded-xl"
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full px-4 py-2 border rounded-xl"
      />
      <button
        type="submit"
        className="w-full bg-yellow-500 text-white py-2 rounded-xl hover:bg-yellow-600"
      >
        Submit
      </button>
    </form>
  );
}

export default Signup;
