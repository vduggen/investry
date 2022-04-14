/**
 * Desmascarar um valor da função toLocaleString
 * @function
 * @param {string} value - Valor com a máscara
 * @returns {number} Um decimal para utilizar em uma coluna decimal(9,2)
 */
function currencyUnmask(value: string): number {
  if (value) {
    const result = value
      .replace('R$ ', '')
      .replace('.', '')
      .replace(',', '.');

    return Number(result);
  }

  return 0;
}

export default currencyUnmask;
