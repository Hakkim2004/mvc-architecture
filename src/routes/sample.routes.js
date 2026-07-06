import { response, Router } from "express";
import { getSampleData } from "../controllers/sample.controllers.js";
import sampleModel from "../models/sample.models.js";

const sampleRouter = Router();

sampleRouter.get('/api', getSampleData);

sampleRouter.post('/create', (req, res) => {
    try {

        const sampleSet = req.body;

        console.log(sampleSet)

    } catch (error) {
        res.status(500).json(
            {
                status: false,
                message: "Internal Server Error",
                response: error.message
            }
        )
    }
})

export default sampleRouter;