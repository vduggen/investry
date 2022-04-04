class FormatLabel {
  private value = '';

  private isRequired = false;

  constructor(value: string, isRequired: boolean) {
    this.setLabel(value);
    this.setIsRequired(isRequired);
  }

  getLabel(): string {
    if (this.getIsRequired()) {
      return `${this.value} *`;
    }

    return this.value;
  }

  setLabel(value: string) {
    this.value = value;
  }

  getIsRequired(): boolean {
    return this.isRequired;
  }

  setIsRequired(isRequired: boolean) {
    this.isRequired = isRequired;
  }
}

export default FormatLabel;
