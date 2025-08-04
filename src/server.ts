import app from "./app.ts"
import dotenv from 'dotenv';
dotenv.config()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
