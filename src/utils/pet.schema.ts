import Joi from "joi";

const PetCreateSchema = Joi.object({
	name: Joi.string().min(2).max(30).required(),
	age: Joi.number().integer().min(0).required(),
	species: Joi.string().min(2).max(30).required(),
	breed: Joi.string().min(2).max(30).required(),
	story: Joi.string().min(2).max(500).optional()
})

export {
	PetCreateSchema
}