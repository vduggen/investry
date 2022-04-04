import dayjs from 'dayjs';

function dateMask(value: string): string {
  if (value) {
    return dayjs(value).format('DD/MM/YYYY');
  }

  return '00/00/0000';
}

export default dateMask;
