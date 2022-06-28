import "./style.css";
import { main } from "../output/Main";
import { audio } from "./audio";
import { shaders } from "./shaders";
import { textures, cubeTextures } from "./textures";
import { models } from "./models";
main(models)(shaders)(cubeTextures)(textures)(audio)();

if (module.hot) {
	module.hot.accept("../output/Main", function () {
		document.body.innerHTML = "";
		main(models)(shaders)(cubeTextures)(textures)(audio)();
	});
}
