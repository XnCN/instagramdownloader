import IResponse from "../interfaces/IResponse";
import IResult from "../interfaces/IResult";
import IStrategy from "../interfaces/IStrategy";

//Type : Post-Image
class PostImageStrategy implements IStrategy {
  Action(response: IResponse): IResult {
    const result: IResult = {
      title: response.data.title,
      media: [
        {
          type: response.data.API,
          api: response.data.Type,
          thumbnail: response.data.media as string,
          media: response.data.media as string,
        },
      ],
    };
    return result;
  }
}

export default new PostImageStrategy();
