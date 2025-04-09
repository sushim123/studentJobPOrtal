import express from "express";
import { addNewApplication, allApplication, deleteApplication, updateStatus } from "../controllers/application.controller.js";

const routes = express();


routes.post("/newapplication", addNewApplication);
routes.get("/allapplications", allApplication);
routes.put("/status/:id", updateStatus);
routes.delete("/delete/:id", deleteApplication);


export default routes;
