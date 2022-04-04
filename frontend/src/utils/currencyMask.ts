function currencyMask(value: number): string {
  if (value) {
    const options = {
      style: 'currency',
      currency: 'BRL',
    };

    return value.toLocaleString('pt-br', options);
  }

  return 'R$ 0,00';
}

export default currencyMask;
