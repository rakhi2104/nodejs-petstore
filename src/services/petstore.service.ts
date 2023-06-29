import {PetAttributes} from "./petstore.types";
import type PetStoreRepository from "../db/repository/pet";

export class PetStoreService {
	private pets: PetAttributes[] = [
		{
			id: 1,
			name: 'Fido',
			age: 2,
			species: 'dog',
			breed: 'mixed'

		},
		{
			id: 2,
			name: 'Kitty',
			age: 1,
			species: 'cat',
			breed: 'mixed'
		}
	]

	constructor(private petStoreRepository: PetStoreRepository) {
	}

	createNewPet(payload: PetAttributes) {
		return this.petStoreRepository.create(payload)
	}

	getAllPets() {
		return this.petStoreRepository.findAll()
	}

	getPetById(id: number) {
		return this.petStoreRepository.findById(id)
	}

}