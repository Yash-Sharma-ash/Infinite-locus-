import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/index";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
// (baaki pages baad me add karenge)

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Regiter" element={<Register />} />
      {/* placeholders (optional) */}
      {/* <Route path="/events" element={<EventsList />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
