import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !phone) {
      setError("Please fill in all fields.");
      return;
    }
    
    // Reset error
    setError("");

    // Handle the login logic (like sending data to a backend API)
    console.log("Email:", email);
    console.log("Phone:", phone);
    
    // Reset form (optional)
    setEmail("");
    setPhone("");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 p-2 w-full border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300"
              placeholder="123-456-7890"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
