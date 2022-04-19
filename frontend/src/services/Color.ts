import Api from '@/typings/classes/Api';

import TColors from '@/typings/types/TColors';

import ISoftDeleting from '@/typings/interfaces/ISoftDeleting';
import ITimestamps from '@/typings/interfaces/ITimestamps';
import IID from '@/typings/interfaces/IId';

const Http = new Api('/colors');

// Interface to response
interface IColorsModelResponse extends ITimestamps, ISoftDeleting, TColors, IID {}

const getAllColors = () => Http.all<IColorsModelResponse>();

export {
  getAllColors,
  IColorsModelResponse,
};
