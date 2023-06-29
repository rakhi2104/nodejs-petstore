import PetModel from "../models/Pet";
import {PetAttributes} from "../../services/petstore.types";

class PetStoreRepository {
	async create(petPayload: PetAttributes) {
		return await PetModel.create(petPayload)
	}

	async findAll() {
		return await PetModel.findAll()
	}

	async findById(id: number) {
		return await PetModel.findOne({
			where: {
				id
			}
		})
	}
}

export default PetStoreRepository