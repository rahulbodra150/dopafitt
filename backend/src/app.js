import express from "express";
import { clerkMiddleware } from "@clerk/express";

const app = express();

// Middleware
app.use(express.json());

// Apply Clerk middleware globally (optional)
app.use(clerkMiddleware());

// Example route
app.get("/", (req, res) => {
  res.send("Server Running 🚀");
});

export default app;
