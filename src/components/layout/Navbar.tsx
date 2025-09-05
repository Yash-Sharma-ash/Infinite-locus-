import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();

  // ✅ Login status track karne ke liye state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // LocalStorage ya token check
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login"); // logout ke baad login page pe bhej do
  };

  return (
    <AppBar position="sticky" elevation={0} color="inherit">
      <Toolbar className="max-w-7xl mx-auto w-full">
        {/* Logo + Title */}
        <Box className="flex items-center gap-2">
          <img src="/leaf-logo.jpg" alt="Logo" className="h-8 w-8" />
          <Typography variant="h6" fontWeight={700}>
            Campus Events
          </Typography>
        </Box>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Navigation Links */}
        <Box className="flex items-center gap-2">
          <Button component={Link} to="/" variant="text">
            Home
          </Button>
          <Button component={Link} to="/events" variant="text">
            Events
          </Button>

          {isLoggedIn ? (
            <>
              <Button component={Link} to="/profile" variant="text">
                Profile
              </Button>
              <Button onClick={handleLogout} variant="outlined">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button component={Link} to="/login" variant="outlined">
                Login
              </Button>
              <Button component={Link} to="/register" variant="contained">
                Sign up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
