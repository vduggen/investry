import ICategory from '../typings/ICategory';

const categories: ICategory[] = [
  {
    id: 1,
    name: 'Receitas',
    description: '',
    icon: 'cash-plus',
    color: 'success',
  },
  {
    id: 2,
    name: 'Investimentos',
    description: 'É o montante que você destinará aos seus investimentos.',
    icon: 'cash-refund',
    color: 'success',
  },
  {
    id: 3,
    name: 'Fixas',
    description: 'Aquelas que têm o mesmo valor mensalmente.',
    icon: 'cash-lock',
    color: 'error',
  },
  {
    id: 4,
    name: 'Váriaveis',
    description: 'Aquelas que acontecem todos os meses mas podemos reduzir.',
    icon: 'cash-multiple',
    color: 'error',
  },
  {
    id: 5,
    name: 'Extras',
    description: 'São as despesas extraordinárias, para as quais precisamos estar preparados quando acontecerem.',
    icon: 'hospital',
    color: 'error',
  },
  {
    id: 6,
    name: 'Adicionais',
    description: 'Aquelas que não precisam acontecer todos os meses.',
    icon: 'cash-plus',
    color: 'error',
  },
];

export default categories;
