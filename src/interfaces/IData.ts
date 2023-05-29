import IMediaWithThumb from "./IMediaWithTumb";

export default interface IData {
  API: string;
  Type: string;
  name?: string;
  title: string;
  media?: string[] | string;
  media_with_thumb?: IMediaWithThumb[];
  carousel_thumb?: string;
  thumbnail?: string;
}
