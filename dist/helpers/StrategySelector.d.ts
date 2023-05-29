import IResponse from "../interfaces/IResponse";
import IStrategy from "../interfaces/IStrategy";
declare function StrategySelector(response: IResponse): IStrategy;
export default StrategySelector;
