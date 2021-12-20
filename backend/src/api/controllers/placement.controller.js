import asyncHandler from "express-async-handler"
import placementService from "../services/placement.service"

export const helloPlacement = asyncHandler(async (req, res) => {
    res.status(200).send({
        success: true,
        message: "Welcome to Placement APIs",
    })
})
 
const addCompany = asyncHandler(async (req, res) => {
    try {
        const newUser = await new placementService().addPlacement
            req.body.companyName,
            req.body.job
            req.body.
     res.status(201).json({
            success: true,
            message: newUser,
        })
    } catch (error) {
        res.status(409).json({
            success: false,
            message: "User already exists",
        })
    }
})