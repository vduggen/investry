function currencyMask(value: number): string {
  if (value) {
    const options = {
      style: 'currency',
      currency: 'BRL',
    };

    const convertValue = Number(value);

    return convertValue.toLocaleString('pt-br', options);
  }

  return 'R$ 0,00';
}

export default currencyMask;
