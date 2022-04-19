/* eslint-disable max-len */
import Api from '@/typings/classes/Api';

import ITimestamps from '@/typings/interfaces/ITimestamps';
import ISoftDeleting from '@/typings/interfaces/ISoftDeleting';

import TCategory from '@/typings/types/TCategory';

import IID from '@/typings/interfaces/IId';
import { IColorsModelResponse } from './Color';

const Http = new Api('/categories');

// Interface with attributes required to create item
interface ICategoryModel extends TCategory {
  color_id: number;
}
// Interface to response
interface ICategoryModelResponse extends ITimestamps, ISoftDeleting, TCategory, IID {
  color_id: IColorsModelResponse;
}
// Interface with attributes optionals to update item
interface TCategoryModelUpdate extends ICategoryModel, IID {}

const getListCategories = () => Http.all<ICategoryModelResponse>();
const filterCategoryById = (id: number) => Http.find<ICategoryModelResponse>(id);
const deleteCategory = (id: number) => Http.delete(id);
const updateCategory = (id: number, body: ICategoryModel) => Http.update<ICategoryModel, ICategoryModelResponse>(id, body);
const createCategory = (body: ICategoryModel) => Http.create<ICategoryModel, ICategoryModelResponse>(body);

export {
  getListCategories,
  updateCategory,
  deleteCategory,
  filterCategoryById,
  createCategory,
  ICategoryModel,
  TCategoryModelUpdate,
  ICategoryModelResponse,
};
