/* eslint-disable max-len */
import Api from '@/typings/classes/Api';

import ITimestamps from '@/typings/interfaces/ITimestamps';
import ISoftDeleting from '@/typings/interfaces/ISoftDeleting';

import TCashFlow from '@/typings/types/TCashFlow';
import TOptional from '@/typings/types/TOptional';

const Http = new Api('/cash-flow');

// Interface with attributes required to create item
type ICashFlowModel = TCashFlow
// Interface to response
interface ICashFlowModelResponse extends ITimestamps, ISoftDeleting, TCashFlow {}
// Interface with attributes optionals to update item
type TCashFlowModelBody = TOptional<TCashFlow, keyof TCashFlow>;

const getAllCashFlows = (filters?: TCashFlowModelBody) => Http.all<ICashFlowModelResponse, TCashFlowModelBody>(filters);
const createCashFlow = (body: ICashFlowModel) => Http.create<ICashFlowModel, ICashFlowModelResponse>(body);

export {
  getAllCashFlows,
  createCashFlow,
  ICashFlowModel,
  ICashFlowModelResponse,
};
