import ICategory from './ICategory';

interface ICashFlow {
  id: number;
  category_id: ICategory;
  wallet_id: number;
  name: string;
  value: number;
  deleted_at: Date;
  created_at: Date;
  updated_at: Date;
}

export default ICashFlow;
