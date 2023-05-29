"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Type:Carousel
class CarouselStrategy {
    Action(response) {
        const result = {
            title: response.data.title,
            media: response.data.media_with_thumb,
        };
        return result;
    }
}
exports.default = new CarouselStrategy();
