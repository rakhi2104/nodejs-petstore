import {before, GET, POST, route} from "awilix-express";
import {Request, Response} from "express";
import {PetStoreService} from "../services/petstore.service";
import bodyParser from "body-parser";
import {validateCreatePet} from "../utils/validator.utils";

@route('/pets')
export class PetStoreController {
	constructor(private readonly petStoreService: PetStoreService,) {
	}

	@GET()
	async get(req: Request, res: Response) {
		const result = await this.petStoreService.getAllPets()
		return res.status(200).json(result)
	}

	@GET()
	@route('/:id')
	async getPetById(req: Request, res: Response) {
		const result = await this.petStoreService.getPetById(Number(req.params.id))
		return res.status(200).json(result)
	}


	@POST()
	@before([bodyParser(), validateCreatePet])
	async create(req: Request, res: Response) {
		const result = await this.petStoreService.createNewPet(req.body)
		return res.status(201).json(result)
	}
}