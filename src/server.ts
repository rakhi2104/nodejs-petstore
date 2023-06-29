import express from 'express';
import dotenv from 'dotenv'
import {loadControllers} from 'awilix-express'
import {loadContainer} from './container'
import {dbInit} from "./db/init";

dotenv.config()

const app: express.Application = express();

app.use(express.json())

loadContainer(app)

app.use(loadControllers(
	'controllers/*.ts',
	{cwd: __dirname}
))

dbInit().then(() => {
	console.log('DB init success')
}).catch((err) => {
	console.log('Error while DB init', err)
})

app.listen(9600, function () {
	console.log('Example app listening on port 9600!');
});
