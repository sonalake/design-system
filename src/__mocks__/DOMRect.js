class DOMRect {
  static fromRect() {
    return {
      height: 0,
      width: 0,
      x: 0,
      y: 0,
    };
  }
}

global.DOMRect = DOMRect;
