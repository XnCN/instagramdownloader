import IResponse from "../interfaces/IResponse";
import IResult from "../interfaces/IResult";
import IStrategy from "../interfaces/IStrategy";
declare class CarouselStrategy implements IStrategy {
    Action(response: IResponse): IResult;
}
declare const _default: CarouselStrategy;
export default _default;
