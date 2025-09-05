import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div className="w-1/2 flex flex-col justify-center items-center px-16">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2">Get Started Now</h2>

          {/* Form */}
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Terms & Policy */}
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <p className="text-sm">
                I agree to the <span className="text-blue-600">terms & policy</span>
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800"
            >
              Signup
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-sm text-gray-500">Or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Social Buttons */}
          <div className="flex space-x-4">
            <button className="flex-1 flex items-center justify-center border py-2 rounded-lg hover:bg-gray-50">
              <img src="/google.svg" alt="Google" className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>
            <button className="flex-1 flex items-center justify-center border py-2 rounded-lg hover:bg-gray-50">
              <img src="/apple.svg" alt="Apple" className="w-5 h-5 mr-2" />
              Sign in with Apple
            </button>
          </div>

          {/* Already have an account */}
          <p className="text-center text-sm mt-6">
            Have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2">
        <img
          src="/signup-bg.png"
          alt="Signup background"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
