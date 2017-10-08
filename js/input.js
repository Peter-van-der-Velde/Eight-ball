/**
  *the class that handles input
  * @class
  */
export class Input {
    
    constructor() {
      this.left = false;
      this.right = false;
      this.up = false;
      this.down = false;
      this.space = false;
    }
  
    /**
     * updates the values
     */
    update() {
      document.onkeydown = (e) => {
        e = e || window.event;
  
        if (e.keyCode === 65) {
          this.left = true;
        }
        if (e.keyCode === 68) {
          this.right = true;
        }
        if (e.keyCode === 87) {
          this.up = true;
        }
        if (e.keyCode === 83) {
          this.down = true;
        }
        if (e.keyCode === 32) {
          this.space = true;
        }
      }
  
      document.onkeyup = (e) => {
        e = e || window.event;
  
        if (e.keyCode === 65) {
          this.left = false;
        }
        if (e.keyCode === 68) {
          this.right = false;
        }
        if (e.keyCode === 87) {
          this.up = false;
        }
        if (e.keyCode === 83) {
          this.down = false;
        }
        if (e.keyCode === 32) {
          this.space = false;
        }
      }
    }
  }