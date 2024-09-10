import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and signup
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState(""); // For password in signup form
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !phone || (isSignUp && !password)) {
      setError("Please fill in all fields.");
      return;
    }

    // Reset error
    setError("");

    if (isSignUp) {
      console.log("Sign Up Email:", email);
      console.log("Sign Up Phone:", phone);
      console.log("Sign Up Password:", password);
    } else {
      console.log("Login Email:", email);
      console.log("Login Phone:", phone);
    }

    // Reset form (optional)
    setEmail("");
    setPhone("");
    setPassword("");

    navigate("/question")
  };

  const handleGoogleLogin = () => {
    // Placeholder for Google Login logic
    console.log("Google Login");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-400">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 p-2 w-full bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="123-456-7890"
              required
            />
          </div>

          {isSignUp && (
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-400">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="********"
                required
              />
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </div>
        </form>

        <div className="flex justify-center mt-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
          >
            <span className="mr-2">Google Login</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="24"
              height="24"
            >
              <path
                fill="#4285F4"
                d="M24 9.5c3.4 0 6.2 1.2 8.5 3.2l6.3-6.3C34.9 3.1 30.6 1 24 1 14.9 1 7.4 6.9 4.4 14.7l7.8 6.2c1.5-5.5 6.5-9.4 11.8-9.4z"
              />
              <path
                fill="#34A853"
                d="M46.2 24.6c0-1.5-.1-2.6-.3-3.8H24v7.4h12.6c-.5 2.7-2 5-4.4 6.5l6.9 5.4c4-3.6 6.3-8.8 6.3-15.5z"
              />
              <path
                fill="#FBBC05"
                d="M12.2 29.3c-1-3.2-1-6.6 0-9.8L4.4 14.7c-3.6 7.1-3.6 15.5 0 22.6l7.8-6.2z"
              />
              <path
                fill="#EA4335"
                d="M24 47c6.3 0 11.6-2.1 15.5-5.8l-6.9-5.4c-2 1.3-4.6 2.1-8.6 2.1-5.3 0-10.3-3.9-11.8-9.4l-7.8 6.2C7.4 41.1 14.9 47 24 47z"
              />
            </svg>
          </button>
        </div>

        <p className="text-center text-gray-400 mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="ml-2 text-green-500 hover:underline"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
