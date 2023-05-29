import IResponse from "../interfaces/IResponse";
import IResult from "../interfaces/IResult";
import IStrategy from "../interfaces/IStrategy";

//Type:Carousel
class CarouselStrategy implements IStrategy {
  Action(response: IResponse): IResult {
    const result: IResult = {
      title: response.data.title,
      media: response.data.media_with_thumb,
    };
    return result;
  }
}

export default new CarouselStrategy();
