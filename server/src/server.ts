import server from "../src/app.ts";
import { connectDB } from "./config/db.ts";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

await connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
