"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Type : Post-Video
class PostVideoStrategy {
    Action(response) {
        const result = {
            title: response.data.title,
            media: [
                {
                    type: response.data.API,
                    api: response.data.Type,
                    thumbnail: response.data.media,
                    media: response.data.media,
                },
            ],
        };
        return result;
    }
}
exports.default = new PostVideoStrategy();
