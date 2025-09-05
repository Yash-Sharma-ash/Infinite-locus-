const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { createServer } = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const eventRoutes = require('./routes/events');
const registrationRoutes = require('./routes/registrations');
const departmentRoutes = require('./routes/departments');
const categoryRoutes = require('./routes/categories');
const notificationRoutes = require('./routes/notifications');
const analyticsRoutes = require('./routes/analytics');
const reportRoutes = require('./routes/reports');
const feedbackRoutes = require('./routes/feedback');

const app = express();
const server = createServer(app);

// ✅ Allowed origins (sirf ek hi jagah define karo)
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173", // Vite frontend
  process.env.CLIENT_URL    // Production me frontend URL
].filter(Boolean);

// 📡 Socket.IO config
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  }
});

// 🔒 Security Middlewares
app.use(helmet());

// ✅ CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

// 🚦 Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// 🔧 Parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// 📦 Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/campus-events', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('✅ Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

// 📡 Socket.io attach to req
app.use((req, res, next) => {
  req.io = io;
  next();
});

// 🛣️ Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/registrations', registrationRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/feedback', feedbackRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 📡 Socket.io Events
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join-event', (eventId) => {
    socket.join(`event-${eventId}`);
  });

  socket.on('leave-event', (eventId) => {
    socket.leave(`event-${eventId}`);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// ❌ Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

// ❌ 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// 🚀 Server Start
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
  console.log(`✅ Allowed Origins: ${allowedOrigins.join(", ")}`);
});
