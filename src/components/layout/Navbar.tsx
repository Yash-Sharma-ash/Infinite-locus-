import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="sticky" elevation={0} color="inherit">
      <Toolbar className="max-w-7xl mx-auto w-full">
        <Box className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          <Typography variant="h6" fontWeight={700}>
            Campus Events
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box className="flex items-center gap-2">
          <Button component={Link} to="/" variant="text">Home</Button>
          <Button component={Link} to="/events" variant="text">Events</Button>
          <Button component={Link} to="/login" variant="outlined">Login</Button>
          <Button component={Link} to="/Regiter" variant="contained">Sign up</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
