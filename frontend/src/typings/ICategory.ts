import IColor from './IColor';

interface ICategory {
  id: number;
  color_id: IColor;
  name: string;
  description?: string;
  icon: string;
  deleted_at: null | Date;
  created_at: Date;
  updated_at: Date;
}

export default ICategory;
