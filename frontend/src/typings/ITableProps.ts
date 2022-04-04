import ITableHeader from './ITableHeader';
import IItem from './IItem';

interface ITableProps {
  headers: ITableHeader[];
  customs: string[];
  data: IItem[]
}

export default ITableProps;
