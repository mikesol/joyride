import "./style.css";
import { main } from "../output/Main";
import { audio } from "./audio";
import { textures, cubeTextures } from "./textures";
main(cubeTextures)(textures)(audio)();

if (module.hot) {
	module.hot.accept("../output/Main", function () {
		document.body.innerHTML = "";
		main(cubeTextures)(textures)(audio)();
	});
}
