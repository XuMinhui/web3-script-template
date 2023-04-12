import { Config, JsonDB } from "node-json-db";
import configConstants from "./config.constants";

const DIR_CACHE = configConstants.dirRootPath.cache || '/.cache'

export default {
    Token_Erc20: new JsonDB(new Config(DIR_CACHE + '/Token_Erc20', true, true, '/'))
}