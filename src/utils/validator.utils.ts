import {Request, Response} from "express";
import {PetCreateSchema} from "./pet.schema";

function validateCreatePet(req: Request, res: Response, next: any): void {
	const {error} = PetCreateSchema.validate(req.body)
	if (error) {
		res.status(400).json({
			message: "Validation error",
			error: error.details
		})
	} else {
		next()
	}
}

export {
	validateCreatePet
}