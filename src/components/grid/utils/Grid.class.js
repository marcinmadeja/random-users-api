class Grid {
  constructor() {
    this.unit = 'px';
    this.screenLg = `1200${this.unit}`;
    this.gutter = `15${this.unit}`;
    this.gutterRaw = this.clearUnit(this.gutter);
    this.columns = 12;

    this.settings = {
      xxl: {
        breakpoint: 1900,
        container: 1600,
        direction: 'ge',
        position: 6,
      },
      xl: {
        breakpoint: 1250,
        container: 1200,
        direction: 'ge',
        position: 5,
      },
      l: {
        breakpoint: 992,
        container: 960,
        direction: 'ge',
        position: 4,
      },
      md: {
        breakpoint: 768,
        container: 720,
        direction: 'ge',
        position: 3,
      },
      s: {
        breakpoint: 576,
        container: 540,
        direction: 'ge',
        position: 2,
      },
      xs: {
        breakpoint: 576,
        container: 'auto',
        direction: 'lt',
        position: 1,
      },
    };

    this.getColWidth = this.getColWidth.bind(this);
    this.formatColData = this.formatColData.bind(this);
    this.getContainerWidth = this.getContainerWidth.bind(this);
    this.multiplyUnitValue = this.multiplyUnitValue.bind(this);
  }

  multiplyUnitValue(value, multiplier) {
    const newValue = this.clearUnit(value) * multiplier;
    return newValue + this.unit;
  }

  clearUnit(value) {
    return parseFloat(value);
  }

  getContainerWidth() {
    return Object.keys(this.settings)
      .map(size => {
        const item = this.settings[size];
        const type = item.direction === 'ge' ? 'min-width' : 'max-width';
        const breakpoint = item.direction === 'ge' ? item.breakpoint : (item.breakpoint - 1);
        const width = item.container === 'auto' ? item.container : item.container + this.unit;
        return `
          @media (${type}: ${breakpoint}${this.unit}) {
            max-width: ${width};
          }
        `;
      })
      .reverse();
  }

  getColWidth(props) {
    const colData = this.formatColData(props);

    return colData.map(item => {
      const colWidth = (item.colWidth / this.columns) * 100;
      const type = item.direction === 'ge' ? 'min-width' : 'max-width';
      const breakpoint = item.direction === 'ge' ? item.breakpoint : (item.breakpoint - 1);

      return `
        @media (${type}: ${breakpoint}${this.unit}) {
          max-width: ${colWidth}%;
        }
      `;
    });
  }

  formatColData(data) {
    console.log('data', data);
    return Object.keys(data)
      .filter(key => this.settings[key])
      .filter(key => this.isNatural(data[key]))
      .map(key => {
        const item = Object.assign({}, this.settings[key]);
        item.colWidth = data[key];
        return item;
      })
      .sort(this.sortBreakpoints);
  }

  sortBreakpoints(a, b) {
    return a.position - b.position;
  }

  isNatural(number) {
    return Number.isInteger(number) && number > 0;
  }
}

const grid = new Grid();

export default grid;
