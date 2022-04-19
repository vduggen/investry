import { AxiosResponse } from 'axios';

type TPromiseAxios<R = unknown> = Promise<AxiosResponse<R>>;

export default TPromiseAxios;
