import express from "express";
import { router } from "./routes/router";

export class App {
	app: express.Express;

	constructor() {
		this.app = express();
		this.middleware();
		this.routes();
	}

	middleware() {
		this.app.use(express.json());
	}

	routes() {
		this.app.use(router);
	}
}

