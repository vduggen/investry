interface IResponseApiComplete<D = any> {
  data: D;
  message: string;
};

interface IResponseApiMessage {
  message: string;
}

export { IResponseApiComplete, IResponseApiMessage };
