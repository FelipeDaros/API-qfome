import { Router } from "express";
import { PlateController } from "../controllers/PlateController";
import multer from "multer";
import upload from "../../../../../config/upload";


const plateRouter = Router();

const plateController = new PlateController();

const uploadFile = multer(upload);

plateRouter.post("/", uploadFile.single('photo_plate'), plateController.createPlate);
plateRouter.get("/", plateController.findAll);

export { plateRouter }