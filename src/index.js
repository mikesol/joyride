import "./style.css";
import {main} from "../output/Main";
main();

if (module.hot) {
	module.hot.accept("../output/Main", function () {
		document.body.innerHTML = "";
		main();
	});
}
