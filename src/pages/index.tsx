import { Button, Card, CardContent, Typography } from "@mui/material";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="flex-1">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 py-12">
          {/* Left: Text + CTAs */}
          <div>
            <Typography variant="h3" fontWeight={800} gutterBottom>
              Discover campus events in <span className="text-green-700">real-time</span>
            </Typography>
            <Typography variant="body1" className="text-gray-600 mb-6">
              Browse events, register instantly, and watch attendee counts update live.
            </Typography>
            <div className="flex gap-3">
              <Button component={Link} to="/events" variant="contained">
                Explore Events
              </Button>
              <Button component={Link} to="/login" variant="outlined">
                Login
              </Button>
            </div>

            {/* Highlights (optional) */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {["Real-time counts", "Role-based access", "Easy approvals"].map((t) => (
                <Card key={t} className="shadow-sm">
                  <CardContent>
                    <Typography variant="subtitle1" fontWeight={700}>{t}</Typography>
                    <Typography variant="body2" className="text-gray-600">
                      {t === "Real-time counts" && "Live updates via WebSocket/SSE."}
                      {t === "Role-based access" && "Student, Organizer, Admin flows."}
                      {t === "Easy approvals" && "Approve/reject registrations quickly."}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative w-full h-[360px] md:h-[440px] rounded-3xl overflow-hidden shadow">
            <img
              src="/leaf.jpg"
              alt="Campus leaf"
              className="w-full h-full object-cover"
            />
            {/* Soft overlay for text contrast (optional) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
