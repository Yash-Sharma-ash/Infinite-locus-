import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginUser({ email, password });
      localStorage.setItem("token", res.token); // ✅ token save
      setUser(res.user); // ✅ global auth state update
      navigate("/events"); // ✅ redirect after login
    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex w-1/2 flex-col justify-center px-12">
        <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
        <p className="text-gray-600 mb-8">
          Enter your credentials to access your account
        </p>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium">Password</label>
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Remember me */}
          <div className="flex items-center mb-6">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-600">
              Remember for 30 days
            </span>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t"></div>
          <span className="mx-2 text-gray-400">or</span>
          <div className="flex-grow border-t"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="flex-1 border py-2 rounded-md flex items-center justify-center gap-2">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>
          <button className="flex-1 border py-2 rounded-md flex items-center justify-center gap-2">
            <img
              src="https://www.svgrepo.com/show/303128/apple-logo.svg"
              alt="Apple"
              className="w-5 h-5"
            />
            Sign in with Apple
          </button>
        </div>

        {/* Sign Up link */}
        <p className="text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 font-medium">
            Sign Up
          </Link>
        </p>
      </div>

      {/* Right Section (Image) */}
      <div className="w-1/2 hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="Login illustration"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
