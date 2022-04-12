/* eslint-disable camelcase */
import Http from './http';

export interface IBodyCategory {
  color_id: number;
  name: string;
  description: string;
  icon: string;
}

class Category {
  protected resource = '/categories';

  public async create(body: IBodyCategory) {
    return Http.post(this.resource, body);
  }

  public async all() {
    return Http.get(this.resource);
  }

  public async update(id: number, body: IBodyCategory) {
    return Http.put(`${this.resource}/${id}`, body);
  }

  public async delete(id: number) {
    return Http.delete(`${this.resource}/${id}`);
  }
}

export default Category;
