import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

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

    navigate("/question");
  };

  const handleClick = () => {
    const callbackUrl = `${window.location.origin}/question`; // Current origin (e.g., http://localhost:3000)
    const googleClientId =
      "715661420659-i2u7t2j7sgldbj2v9p3mm9ilvmb8ddbn.apps.googleusercontent.com";
    const targetUrl = `https://accounts.google.com/o/oauth2/auth?redirect_uri=${encodeURIComponent(
      callbackUrl
    )}&response_type=token&client_id=${googleClientId}&scope=openid%20email%20profile`;
    window.location.href = targetUrl; // Redirect to Google OAuth
  };

  // Check for the token in the URL hash and store it in localStorage
  useEffect(() => {
    const hash = window.location.hash; // Get URL hash (e.g., #access_token=...)
    if (hash) {
      const params = new URLSearchParams(hash.substring(1)); // Parse hash, remove the `#`
      const accessToken = params.get("access_token"); // Get the access_token from the hash

      if (accessToken) {
        localStorage.setItem("googleAccessToken", accessToken); // Store token in localStorage
        console.log("Token stored in localStorage:", accessToken);

        // Redirect to /question after successful login
        window.location.href = "http://localhost:3000/question";
      }
    }
  }, []); 


  return (
    <GoogleOAuthProvider clientId='715661420659-erf1p4if510f3q4ea1bqlvej82dtncav.apps.googleusercontent.com'>
          <div className="flex h-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400"
            >
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
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-400"
            >
              Password
            </label>
            <input
              id="phone"
              type="password"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 p-2 w-full bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="*********"
              required
            />
          </div>

          {isSignUp && (
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-400"
              >
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
          <GoogleLogin
            onClick = {handleClick}
          />
        </div>

        <p className="text-center text-gray-400 mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={handleClick}
            className="ml-2 text-green-500 hover:underline"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
