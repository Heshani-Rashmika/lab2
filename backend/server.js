const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// ✅ Root route (THIS FIXES YOUR ISSUE)
app.get('/', (req, res) => {
  res.send('Backend is running successfully 🚀');
});

// Routes
const itemRoutes = require('./routes/items');
app.use('/api/items', itemRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));