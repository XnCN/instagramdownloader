import IResponse from "../interfaces/IResponse";
import IResult from "../interfaces/IResult";
import IStrategy from "../interfaces/IStrategy";
declare class PostVideoStrategy implements IStrategy {
    Action(response: IResponse): IResult;
}
declare const _default: PostVideoStrategy;
export default _default;
