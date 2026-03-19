import express from 'express';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello Rahul 🚀 Your server is running!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: "This is API data" });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on 123 http://localhost:${PORT}`);
});