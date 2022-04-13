import { AxiosResponse } from 'axios';
import { IResponseApiComplete, IResponseApiMessage } from '@/typings/IResponseApi';
import IBodyCategory from '@/typings/IBodyCategory';
import ICategory from '@/typings/ICategory';
import Http from './http';

type ReturnFunction = Promise<AxiosResponse<IResponseApiComplete<ICategory>>>;

class Category {
  protected resource = '/categories';

  protected mountResourceWithId(id: number) {
    return `${this.resource}/${id}`;
  }

  public async create(body: IBodyCategory): ReturnFunction {
    return Http.post(this.resource, body);
  }

  public async all(): Promise<AxiosResponse<IResponseApiComplete<ICategory[]>>> {
    return Http.get(this.resource);
  }

  public async update(id: number, body: IBodyCategory): ReturnFunction {
    return Http.put(this.mountResourceWithId(id), body);
  }

  public async delete(id: number): Promise<AxiosResponse<IResponseApiMessage>> {
    return Http.delete(this.mountResourceWithId(id));
  }
}

export default Category;
