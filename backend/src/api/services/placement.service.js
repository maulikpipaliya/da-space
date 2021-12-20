import placementModel from "../../models/placement.model"


export default class placementService{
    async addPlacement(
        companyName,
        jobProfile,
        yearOfDrive,
        roundNameX,
        roundNameY,
        roundNameXDescriptioconst
    )
    {
        const addNewPlacement = new placementModel({
            companyName,
            jobProfile,
            yearOfDrive,
            roundNameX,
            roundNameY,
            roundNameXDescriptioconst
        })
        await addNewPlacement.save()
        return addNewPlacement
    }
}