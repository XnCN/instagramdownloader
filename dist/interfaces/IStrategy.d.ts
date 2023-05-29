import IResponse from "./IResponse";
import IResult from "./IResult";
export default interface IStrategy {
    Action(response: IResponse): IResult;
}
