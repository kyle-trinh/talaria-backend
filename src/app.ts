import express from "express";
import userRouter from "./routes/userRoutes";
import { errorHandler } from "./controllers/errorController";
import AppError from "./utils/AppError";
import cookieParser from "cookie-parser";
import accountRouter from "./routes/accountRoutes";
import counterRouter from "./routes/counterRoutes";
import cryptoRouter from "./routes/cryptoRoutes";
import giftcardRouter from "./routes/giftcardRoutes";
import warehouseRouter from "./routes/warehouseRoutes";

const app = express();

app.use(express.json());

// need this to read cookies from request
app.use(cookieParser());

app.get("/", async (_req, res, _next) => {
  res.send("Hello");
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/accounts", accountRouter);
app.use("/api/v1/counters", counterRouter);
app.use("/api/v1/cryptos", cryptoRouter);
app.use("/api/v1/giftcards", giftcardRouter);
app.use("/api/v1/warehouses", warehouseRouter);

app.all("*", (req, _res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorHandler);

export default app;
