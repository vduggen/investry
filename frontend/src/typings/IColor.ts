interface IColor {
  id: string;
  name: string,
  prefix: string;
  deleted_at: null | Date;
  created_at: Date;
  updated_at: Date;
}

export default IColor;