import express from "express";
import routes from "./routes/index.js";

export const launch = ({ protocol, port, host }) => {
  const application = express();

  application.use(express.json());

  application.use(routes);

  application.listen(port, () =>
    console.log(`MiloAnton/facebook-api is ready and running at ${protocol}://${host}:${port}`)
  );
};
