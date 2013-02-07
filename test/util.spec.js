var Util = require('../js/util');

function Coords(options) {
    options = options || {};

    this.x = options.x === undefined ? 0 : options.x;
    this.y = options.y === undefined ? 0 : options.y;
};

function MyObj(options) {
    options = options || {};

    this.a = options.a || 'A';
    this.b = options.b || 'B';
    this.c = options.c || 'C';
    this.coords = options.coords === undefined ? new Coords() : options.coords;
};

MyObj.prototype.doStuff = function () {
    this.b = this.b + 'blah';
};

describe('Util', function(){
  describe('execution', function() {
      expect(Util.recurseMerge).toBeDefined();

      var coords = new Coords({x: 1, y: 2});
      var x = new MyObj({a: 'Foo', coords: new Coords({x: 50, y: 25})});
      var y = {z: '!', c: 'Z', coords: new Coords({x:5, y:10})};

      Util.recurseMerge(x, y);

      expect(x.a).toEqual('Foo');
      expect(x.b).toEqual('B');
      expect(x.c).toEqual('Z');
      expect(x.coords.x).toEqual(5);
      expect(x.coords.y).toEqual(10);
  });
});

