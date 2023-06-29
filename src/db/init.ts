import PetModel from "./models/Pet";

const isDev = process.env.NODE_ENV === 'development';

const dbInit = async () => {
	await PetModel.sync({
		force: isDev,
	})
}

export {
	dbInit
}