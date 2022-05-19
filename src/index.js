import "./style.css";
import { main } from "../output/Main";
import { bme, silentRoom } from "./silentroom";
main(bme)(silentRoom)();

if (module.hot) {
	module.hot.accept("../output/Main", function () {
		document.body.innerHTML = "";
		main(bme)(silentRoom)();
	});
}
