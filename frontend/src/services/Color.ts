import IColor from '@/typings/IColor';
import Http from './http';

class Color {
  protected resource = '/colors';

  public async all() {
    return Http.get(this.resource);
  }

  public async create(body: IColor) {
    return Http.post(this.resource, body);
  }
}

export default Color;
