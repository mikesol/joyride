import "./style.css";
import { main } from "../output/Main";
import { silentRoom } from "./silentroom";
main(silentRoom)();

if (module.hot) {
	module.hot.accept("../output/Main", function () {
		document.body.innerHTML = "";
		main(silentRoom)();
	});
}
