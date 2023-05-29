"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const axios_retry_1 = __importDefault(require("axios-retry"));
const StrategySelector_1 = __importDefault(require("./helpers/StrategySelector"));
function Download(setting) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, axios_retry_1.default)(axios_1.default, {
            retries: setting.retryCount,
            retryDelay: axios_retry_1.default.exponentialDelay,
        });
        const { data, status } = yield axios_1.default.post("https://dowmate.com/api/allinone/", { url: setting.url });
        if (data.data.name != undefined)
            throw Error("Api Error, please try again in few seconds");
        var strategy = (0, StrategySelector_1.default)(data);
        return strategy.Action(data);
    });
}
exports.default = Download;
