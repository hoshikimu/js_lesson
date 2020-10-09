'use strict';

{
  class Board {
    constructor() {
      this.panels = []:
      for (let i = 0; i < 4; i++) {
        this.panels.push(new Panel());
      }
    }
  }

  const board = new Board();
}