const env = require("./config/env");
const app = require("./app");
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

// Start server
app.listen(env.PORT, () => {
  console.log(`Server running on http://localhost:${env.PORT}`);
});
