import IResponse from "../interfaces/IResponse";
import IStrategy from "../interfaces/IStrategy";
import CarouselStrategy from "../strategies/CarouselStrategy";
import PostImageStrategy from "../strategies/PostImageStrategy";
import PostVideoStrategy from "../strategies/PostVideoStrategy";

function StrategySelector(response: IResponse): IStrategy {
  const strategies = [
    {
      Type: "Carousel",
      Strategy: CarouselStrategy,
    },
    {
      Type: "Post-Image",
      Strategy: PostImageStrategy,
    },
    {
      Type: "Post-Video",
      Strategy: PostVideoStrategy,
    },
  ];
  const strategy = strategies.find((x) => x.Type == response.data.Type);
  if (strategy == undefined) throw Error("Strategy not implemented");
  return strategy.Strategy;
}

export default StrategySelector;
