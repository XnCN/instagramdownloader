import axios from "axios";
import axiosRetry from "axios-retry";
import IResponse from "./interfaces/IResponse";
import IStrategy from "./interfaces/IStrategy";
import StrategySelector from "./helpers/StrategySelector";
import ISetting from "./interfaces/ISetting";
import IResult from "./interfaces/IResult";

async function Download(setting: ISetting): Promise<IResult> {
  axiosRetry(axios, {
    retries: setting.retryCount,
    retryDelay: axiosRetry.exponentialDelay,
  });
  const { data, status } = await axios.post<IResponse>(
    "https://dowmate.com/api/allinone/",
    { url: setting.url }
  );
  if (data.data.name != undefined)
    throw Error("Api Error, please try again in few seconds");
  var strategy: IStrategy = StrategySelector(data);
  return strategy.Action(data);
}
export default Download;
