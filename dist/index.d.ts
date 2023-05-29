import ISetting from "./interfaces/ISetting";
import IResult from "./interfaces/IResult";
declare function Download(setting: ISetting): Promise<IResult>;
export default Download;
