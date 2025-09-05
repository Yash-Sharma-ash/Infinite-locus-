import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/auth";

export default function Register() {
  const navigate = useNavigate();

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentId, setStudentId] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState<number>(1);
  const [semester, setSemester] = useState<number>(1);
  const [section, setSection] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const [firstName, ...lastNameArr] = name.trim().split(" ");
      const lastName = lastNameArr.join(" ");

      const res = await registerUser({
        firstName: firstName || name,
        lastName: lastName || "",
        email,
        password,
        role: "student",
        studentId,
        department,
        year,
        semester,
        section,
        phone,
      });

      alert(res.message || "Registration successful ✅");
      navigate("/login");
    } catch (err: any) {
      alert(err.message || "Registration failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div className="w-1/2 flex flex-col justify-center items-center px-16">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2">Get Started Now</h2>

          <form className="space-y-4" onSubmit={handleRegister}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Student ID */}
            <div>
              <label className="block text-sm font-medium mb-1">Student ID</label>
              <input
                type="text"
                placeholder="CS2021001"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm font-medium mb-1">Department ID</label>
              <input
                type="text"
                placeholder="68ba99cb9c32c3e5f2a1a521"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Year & Semester */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Year</label>
                <input
                  type="number"
                  min="1"
                  max="4"
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Semester</label>
                <input
                  type="number"
                  min="1"
                  max="8"
                  value={semester}
                  onChange={(e) => setSemester(Number(e.target.value))}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Section */}
            <div>
              <label className="block text-sm font-medium mb-1">Section</label>
              <input
                type="text"
                placeholder="A"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                placeholder="+1234567890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Terms */}
            <div className="flex items-center">
              <input type="checkbox" required className="mr-2" />
              <p className="text-sm">
                I agree to the <span className="text-blue-600">terms & policy</span>
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 disabled:opacity-50"
            >
              {loading ? "Signing up..." : "Signup"}
            </button>
          </form>

          {/* Already have an account */}
          <p className="text-center text-sm mt-6">
            Have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
