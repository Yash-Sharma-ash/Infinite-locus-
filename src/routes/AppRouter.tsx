import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/index";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import EventsPage from "../pages/events/EventsPage";
// (baaki pages baad me add karenge)

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* placeholders (optional) */}
      <Route path="/events" element={<EventsPage />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
