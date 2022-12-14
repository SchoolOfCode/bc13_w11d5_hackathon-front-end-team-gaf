import express from "express";
import cors from "cors";
import router from "./routes/answersRouter.js";

const app = express();
const port = process.env.PORT || "3000";

app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
  });

export default app;








  