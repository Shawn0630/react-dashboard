import {Config} from "./config";
let override: Config = {} as any; //tslint:disable-line:no-any

try {
    override = require("./override.json"); //tslint:disable-line
} catch (e) {
    console.warn("Unable to read the overriden configuration, use the original one");
}

export {override};
