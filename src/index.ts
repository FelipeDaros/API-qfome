import "reflect-metadata";
import "./shared/container/index";
import "express-async-errors";
import express, { NextFunction, Request, Response } from 'express';
import AppError from "./shared/infra/errors/AppError";
import { userRouter } from "./modules/user/http/routes/User.routes";
import connection from "./shared/infra/connection";
import { restaurantRouter } from "./modules/restaurant/http/routes/Restaurant.routes";
import { plateRouter } from "./modules/plate/http/routes/Plate.routes";
import { orderRouter } from "./modules/order/http/routes/Order.routes";



const app = express();

app.use(express.json());
app.use("/user", userRouter);
app.use("/restaurant", restaurantRouter);
app.use("/plate", plateRouter);
app.use("/order", orderRouter);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  connection
  console.log("SERVER IS RUNNING!");
});