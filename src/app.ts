import express, { Request, Response, NextFunction } from "express";
import baseRouter from "./presenter/routers/v1/base/routes";
import base2Router from "./presenter/routers/v1/base2/routes";
import { Error404 } from "./config/customErrors/error404";
import { httpErrorHandler } from "./middlewares/httpErrorHandler";

// load env variables
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();
// Parsing JSON and URL-Encoded (POST) Bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1/base", baseRouter);
app.use("/v1/base2", base2Router);

// HANDLE UNKNOWN PATHS
app.use((req: Request, res: Response, next: NextFunction) =>
    next(new Error404(`Route ${req.path} not found`, null)),
);

// HANDLE ERRORS
app.use(httpErrorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on("error", (err) => {
    console.log("Server error: ", err);
}).on("close", () => {
    console.log("Server shutting down...");
});
