"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CarouselStrategy_1 = __importDefault(require("../strategies/CarouselStrategy"));
const PostImageStrategy_1 = __importDefault(require("../strategies/PostImageStrategy"));
const PostVideoStrategy_1 = __importDefault(require("../strategies/PostVideoStrategy"));
function StrategySelector(response) {
    const strategies = [
        {
            Type: "Carousel",
            Strategy: CarouselStrategy_1.default,
        },
        {
            Type: "Post-Image",
            Strategy: PostImageStrategy_1.default,
        },
        {
            Type: "Post-Video",
            Strategy: PostVideoStrategy_1.default,
        },
    ];
    const strategy = strategies.find((x) => x.Type == response.data.Type);
    if (strategy == undefined)
        throw Error("Strategy not implemented");
    return strategy.Strategy;
}
exports.default = StrategySelector;
