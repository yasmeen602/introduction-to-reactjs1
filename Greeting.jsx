import React, { useState } from 'react';

const Greeting = () => {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
    setSubmittedName('');
    setName('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome!</h1>

      {!submittedName ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="border p-2 rounded w-full mb-4"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-2">Hello, {submittedName}!</h2>
          <p className="mb-4">You clicked <strong>{count}</strong> times.</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleClick}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Click Me
            </button>
            <button
              onClick={handleReset}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Reset
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Greeting;
