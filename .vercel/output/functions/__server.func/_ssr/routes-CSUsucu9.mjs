import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CSUsucu9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function IrAlJuego() {
	(0, import_react.useEffect)(() => {
		window.location.replace("/dominadas.html");
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "juego-marco",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "juego-aviso",
			children: "Abriendo Dominadas…"
		})
	});
}
//#endregion
export { IrAlJuego as component };
