import { Express } from "express";
import cors from "cors";
import Gun from "gun";

const app = express();
const port = process.env.PORT || 9000;
app.use(cors());
app.use(Gun.serve);
app.get("/", (_, res) => {
  res.status(200).send("> DEBUG: Discord Node is Live");
});
const server = app.listen(port, () => {
  console.log("harshit");
});

Gun({ web: server });
