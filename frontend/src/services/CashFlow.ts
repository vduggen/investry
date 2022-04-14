import { AxiosResponse } from 'axios';
import { IResponseApiComplete, IResponseApiMessage } from '@/typings/IResponseApi';
import ICashFlow from '@/typings/ICashFlow';
import IBodyCashFlow from '@/typings/IBodyCashFlow';
import Http from './http';

type ReturnFunctionObject = Promise<AxiosResponse<IResponseApiComplete<ICashFlow>>>;
type ReturnFunctionArray = Promise<AxiosResponse<IResponseApiComplete<ICashFlow[]>>>;
type ReturnFunctionMessage = Promise<AxiosResponse<IResponseApiMessage>>;

class CashFlow {
  protected resource = '/cash-flow';

  protected mountResourceWithId(id: number) {
    return `${this.resource}/${id}`;
  }

  public async create(body: IBodyCashFlow): ReturnFunctionObject {
    return Http.post(this.resource, body);
  }

  public async all(): ReturnFunctionArray {
    return Http.get(this.resource);
  }

  public async findByCategory(idCategory: number): ReturnFunctionArray {
    return Http.get(this.resource, {
      params: {
        category: idCategory,
      },
    });
  }

  public async update(id: number, body: IBodyCashFlow): ReturnFunctionObject {
    return Http.put(this.mountResourceWithId(id), body);
  }

  public async delete(id: number): ReturnFunctionMessage {
    return Http.delete(this.mountResourceWithId(id));
  }
}

export default CashFlow;
