import { App } from "./app";



try {
	const express = new App();
	

	express.app.listen(3000, () => {
		console.log("Server has been connect with successful");
	});
} catch (error) {
	console.log("Erro ao tentar iniciar o servidor");
	console.log(error);
}