class FormUtil {
  constructor(config) {
    //super();
    this.scene = config.scene;
    //get the game height and width
    this.gameWidth = this.scene.game.config.width;
    this.gameHeight = this.scene.game.config.height;
    this.alignGrid = new AlignGrid({
      scene: this.scene,
      rows: config.rows,
      cols: config.cols,
    });
  }
  showNumbers() {
    this.alignGrid.showNumbers();
  }
  scaleToGameW(elName, per) {
    var el = document.getElementById(elName);
    var w = this.gameWidth * per;
    el.style.width = w + 'px';
  }
  scaleToGameH(elName, per) {
    var el = document.getElementById(elName);
    var h = this.gameHeight * per;
    el.style.height = h + 'px';
  }
  placeElementAt(index, elName, centerX = true, centerY = false) {
    //get the position from the grid
    var pos = this.alignGrid.getPosByIndex(index);
    //extract to local vars
    var x = pos.x;
    var y = pos.y;
    //get the element
    var el = document.getElementById(elName);
    //set the position to absolute
    el.style.position = 'absolute';
    //get the width of the element
    var w = el.style.width;
    //convert to a number
    w = this.toNum(w);
    //
    //
    //center horizontal in square if needed
    if (centerX == true) {
      x -= w / 2;
    }
    //
    //get the height
    //
    var h = el.style.height;
    //convert to a number
    h = this.toNum(h);
    //
    //center verticaly in square if needed
    //
    if (centerY == true) {
      y -= h / 2;
    }
    //set the positions
    el.style.top = y + 'px';
    el.style.left = x + 'px';
  }
  //changes 100px to 100
  toNum(s) {
    s = s.replace('px', '');
    s = parseInt(s);
    return s;
  }
  //add a change callback
  addChangeCallback(elName, fun, scope = null) {
    var el = document.getElementById(elName);
    if (scope == null) {
      el.onchange = fun;
    } else {
      el.onchange = fun.bind(scope);
    }
  }
  getTextAreaValue(elName) {
    var el = document.getElementById(elName);
    return el.value;
  }
  getTextValue(elName) {
    var el = document.getElementById(elName);
    return el.innerText;
  }
  hideElement(elName) {
    var el = document.getElementById(elName);
    el.style.display = 'none';
  }
  showElement(elName) {
    var el = document.getElementById(elName);
    el.style.display = 'block';
  }
}

class AlignGrid {
  constructor(config) {
    if (!config.scene) {
      console.log('missing scene!');
      return;
    }
    if (!config.rows) {
      config.rows = 3;
    }
    if (!config.cols) {
      config.cols = 3;
    }
    if (!config.width) {
      config.width = game.config.width;
    }
    if (!config.height) {
      config.height = game.config.height;
    }
    this.h = config.height;
    this.w = config.width;
    this.rows = config.rows;
    this.cols = config.cols;
    //cw cell width is the scene width divided by the number of columns
    this.cw = this.w / this.cols;
    //ch cell height is the scene height divided the number of rows
    this.ch = this.h / this.rows;
    this.scene = config.scene;
  }
  //place an object in relation to the grid
  placeAt(xx, yy, obj) {
    //calculate the center of the cell
    //by adding half of the height and width
    //to the x and y of the coordinates
    var x2 = this.cw * xx + this.cw / 2;
    var y2 = this.ch * yy + this.ch / 2;
    obj.x = x2;
    obj.y = y2;
  }
  //mostly for planning and debugging this will
  //create a visual representation of the grid
  show(a = 1) {
    this.graphics = this.scene.add.graphics();
    this.graphics.lineStyle(4, 0xff0000, a);
    //
    //
    //this.graphics.beginPath();
    for (var i = 0; i < this.w; i += this.cw) {
      this.graphics.moveTo(i, 0);
      this.graphics.lineTo(i, this.h);
    }
    for (var i = 0; i < this.h; i += this.ch) {
      this.graphics.moveTo(0, i);
      this.graphics.lineTo(this.w, i);
    }
    this.graphics.strokePath();
  }
  placeAtIndex(index, obj) {
    var yy = Math.floor(index / this.cols);
    var xx = index - yy * this.cols;
    this.placeAt(xx, yy, obj);
  }
  showNumbers(a = 1) {
    this.show(a);
    var n = 0;
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        var numText = this.scene.add.text(0, 0, n, {
          color: 'red',
        });
        numText.setOrigin(0.5, 0.5);
        this.placeAt(j, i, numText);
        n++;
      }
    }
  }
  getIndexPos(index) {
    var yy = Math.floor(index / this.cols);
    var xx = index - yy * this.cols;
    var x2 = this.cw * xx + this.cw / 2;
    var y2 = this.ch * yy + this.ch / 2;
    var obj = {};
    obj.x = x2;
    obj.y = y2;
    return obj;
  }
}

export default { FormUtil, AlignGrid };
