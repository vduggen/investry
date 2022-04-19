interface IApiResponseData<Interface = unknown> {
  data: Interface[],
}

interface IApiResponseObject<Interface = unknown> {
  data: Interface,
}

interface IApiResponseMessage {
  message: string,
}

interface IApiResponseMany<Interface = unknown> extends IApiResponseData<Interface>, IApiResponseMessage {};
interface IApiResponseOne<Interface = unknown> extends IApiResponseObject<Interface>, IApiResponseMessage {};

export {
  IApiResponseMany,
  IApiResponseOne,
  IApiResponseMessage,
  IApiResponseData,
  IApiResponseObject,
};
