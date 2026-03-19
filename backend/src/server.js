import env from "./config/env.js";
import app from "./app.js";
import connectDB from "./config/db.js";

// Connect to MongoDB first
connectDB();

// Start server
app.listen(env.PORT, () => {
  console.log(`Server running on http://localhost:${env.PORT}`);
});
