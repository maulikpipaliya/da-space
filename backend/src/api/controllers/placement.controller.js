import asyncHandler from "express-async-handler"

export const helloPlacement = asyncHandler(async (req, res) => {
    res.status(200).send({
        success: true,
        message: "Welcome to Placement APIs",
    })
})
