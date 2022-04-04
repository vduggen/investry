class FormatIcon {
  private iconName = '';

  constructor(iconName: string) {
    this.setIconName(iconName);
  }

  getIconName() {
    return this.verifyExistPrefix();
  }

  setIconName(iconName: string) {
    this.iconName = iconName;
  }

  private verifyExistPrefix() {
    const existPrefix = this.iconName.includes('mdi-');

    return existPrefix ? this.iconName : `mdi-${this.iconName}`;
  }
}

export default FormatIcon;
