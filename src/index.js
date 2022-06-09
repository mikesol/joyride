import "./style.css";
import { main } from "../output/Main";
import { silentRoom } from "./silentroom";
import { textures, cubeTextures } from "./textures";
main(cubeTextures)(textures)(silentRoom)();

if (module.hot) {
	module.hot.accept("../output/Main", function () {
		document.body.innerHTML = "";
		main(textures)(silentRoom)();
	});
}
