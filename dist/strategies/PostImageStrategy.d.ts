import IResponse from "../interfaces/IResponse";
import IResult from "../interfaces/IResult";
import IStrategy from "../interfaces/IStrategy";
declare class PostImageStrategy implements IStrategy {
    Action(response: IResponse): IResult;
}
declare const _default: PostImageStrategy;
export default _default;
