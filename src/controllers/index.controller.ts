import {GET, route} from "awilix-express";
import {Request, Response} from "express";

@route('/')
export class IndexController {
	@GET()
	get(req: Request, res: Response) {
		return res.json({
			message: 'Hello World!'
		})
	}
}