import 'reflect-metadata';
import {asClass, createContainer} from "awilix";
import {scopePerRequest} from "awilix-express";
import {Application} from "express";
import {PetStoreService} from "./services/petstore.service";
import PetStoreRepository from "./db/repository/pet";

export const loadContainer = (app: Application) => {
	const Container = createContainer({
		injectionMode: 'CLASSIC'
	})

	// Register services in container
	Container.register({
		petStoreService: asClass(PetStoreService).scoped(),
		petStoreRepository: asClass(PetStoreRepository).scoped(),
	})

	app.use(scopePerRequest(Container));
}