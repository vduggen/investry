/* eslint-disable max-len */
import TPromiseAxios from '@/typings/types/TPromiseAxios';
import {
  IApiResponseMany,
  IApiResponseOne,
  IApiResponseMessage,
} from '@/typings/interfaces/IApiResponse';
import Http from './Http';

class Api {
  protected resource = '';

  constructor(resource: string) {
    this.resource = resource;
  }

  /**
   * Create a item
   * @param {object} body
   * @returns {Promise} Axios promises and then an object with a message and data
   */
  public async create<InterfaceBody = unknown, InterfaceResponse = unknown>(body: InterfaceBody): TPromiseAxios<IApiResponseOne<InterfaceResponse>> {
    return Http.post(this.resource, body);
  }

  /**
   * List all items
   * @returns {Promise} Axios promises and then an object with a message and data
   */
  public async all<InterfaceResponse = unknown, InterfaceFilters = unknown>(filters?: InterfaceFilters): TPromiseAxios<IApiResponseMany<InterfaceResponse>> {
    return Http.get(this.resource, {
      params: filters,
    });
  }

  /**
   * Find a item by id
   * @param {number} id
   * @returns {Promise} Axios promises and then an object with a message and data
   */
  public async find<InterfaceResponse = unknown>(id: number): TPromiseAxios<IApiResponseOne<InterfaceResponse>> {
    return Http.get(`${this.resource}/${id}`);
  }

  /**
   * Update a item
   * @param {number} id
   * @param {object} body
   * @returns {Promise} Axios promises and then an object with a message and data
   */
  public async update<InterfaceBody = unknown, InterfaceResponse = unknown>(id: number, body: InterfaceBody): TPromiseAxios<IApiResponseOne<InterfaceResponse>> {
    return Http.put(`${this.resource}/${id}`, body);
  }

  /**
   * Delete a item
   * @param {number} id
   * @returns {Promise} Axios promises and then an object with a message with the status if everything went well or not
   */
  public async delete(id: number): TPromiseAxios<IApiResponseMessage> {
    return Http.delete(`${this.resource}/${id}`);
  }
}

export default Api;
