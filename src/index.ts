import express from "express";
import cors from "cors"

const app = express();
const port = "3000";

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Response sent");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
