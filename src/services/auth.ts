import axios from "axios";

const API_URL = "https://infinite-locus.onrender.com/api/auth";

// ✅ Register User
export const registerUser = async (data: any) => {
  const res = await axios.post(`${API_URL}/register`, data, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};

// ✅ Login User
export const loginUser = async (data: { email: string; password: string }) => {
  const res = await axios.post(`${API_URL}/login`, data, {
    headers: { "Content-Type": "application/json" },
  });

  // token save karo localStorage me
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};

// ✅ Get Current User (from JWT in localStorage)
export const getCurrentUser = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;

    // JWT decode karna
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload; // { id, email, role, ... }
  } catch (err) {
    return null;
  }
};

// ✅ Logout User
export const logoutUser = () => {
  localStorage.removeItem("token");
};
