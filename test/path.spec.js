var Path = require('../js/path');
var Point = require('../js/point');


describe('Path', function(){

  describe('construction', function() {
    it('default construction', function() {
      var path = new Path();

      expect(path.points).not.toBe(null);
      expect(path.points).toEqual(new Array());
      expect(path.length()).toEqual(0);
      expect(path.isEmpty()).toEqual(true);
    });
    it('construction with points', function() {
      var pointsArray = new Array(new Point(1,1),new Point(2,2),new Point(3,3));
      var path = new Path({points: pointsArray});

      expect(path.points).not.toBe(null);
      expect(path.points === pointsArray);
      expect(path.points.length).toEqual(3);
      expect(path.length()).toEqual(3);
      expect(path.isEmpty()).toEqual(false);
    });
    it('construction with points that have options', function() {
      var pointsArray = new Array(new Point(1,1, {altitude: 1}),new Point(2,2, {altitude: 2}),new Point(3,3, {altitude: 3}));
      var path = new Path({points: pointsArray});

      expect(path.points).not.toBe(null);
      expect(path.points === pointsArray);
      expect(path.points.length).toEqual(3);
      expect(path.length()).toEqual(3);
      expect(path.isEmpty()).toEqual(false);

      expect(path.getPoint(0).altitude).toEqual(1);
      expect(path.getPoint(1).altitude).toEqual(2);
      expect(path.getPoint(2).altitude).toEqual(3);
    });
  });
  describe('retrieval', function() {
    it('retrieving a point', function() {
      var path = new Path();
      expect(path.getPoint).toBeDefined();
    });
    it('retreiving as an array', function() {
      var path = new Path();
      expect(path.toArray).toBeDefined();
    });
  });
  describe('manipulation', function() {
    it('inserting points', function() {
      var pointsArray = new Array(new Point(1,1),new Point(2,2),new Point(3,3));
      var path = new Path({points: pointsArray});

      expect(path.insert).toBeDefined();

      expect(path.length()).toEqual(3);
      path.insert(1, 5, 6);

      expect(path.length()).toEqual(4);
      expect(path.getPoint(0).position.latitude).toEqual(1);
      expect(path.getPoint(0).position.longitude).toEqual(1);
      expect(path.getPoint(1).position.latitude).toEqual(5);
      expect(path.getPoint(1).position.longitude).toEqual(6);
      expect(path.getPoint(2).position.latitude).toEqual(2);
      expect(path.getPoint(2).position.longitude).toEqual(2);
      expect(path.getPoint(3).position.latitude).toEqual(3);
      expect(path.getPoint(3).position.longitude).toEqual(3);

      path.insert(1, 7, 8, {altitude: 90});
      expect(path.length()).toEqual(5);
      expect(path.getPoint(0).position.latitude).toEqual(1);
      expect(path.getPoint(0).position.longitude).toEqual(1);
      expect(path.getPoint(1).position.latitude).toEqual(7);
      expect(path.getPoint(1).position.longitude).toEqual(8);
      expect(path.getPoint(1).altitude).toEqual(90);
      expect(path.getPoint(2).position.latitude).toEqual(5);
      expect(path.getPoint(2).position.longitude).toEqual(6);
      expect(path.getPoint(3).position.latitude).toEqual(2);
      expect(path.getPoint(3).position.longitude).toEqual(2);
      expect(path.getPoint(4).position.latitude).toEqual(3);
      expect(path.getPoint(4).position.longitude).toEqual(3);
    });
    it('deleting points', function() {
      var pointsArray = new Array(new Point(1,1),new Point(2,2),new Point(3,3));
      var path = new Path({points: pointsArray});

      expect(path.delete).toBeDefined();
      expect(path.length()).toEqual(3);

      path.delete(1);

      expect(path.length()).toEqual(2);
      expect(path.getPoint(0).position.latitude).toEqual(1);
      expect(path.getPoint(0).position.longitude).toEqual(1);
      expect(path.getPoint(1).position.latitude).toEqual(3);
      expect(path.getPoint(1).position.longitude).toEqual(3);
    });
    it('appending points', function() {
      var pointsArray = new Array(new Point(1,1),new Point(2,2),new Point(3,3));
      var path = new Path({points: pointsArray});

      expect(path.append).toBeDefined();

      path.append(4, 4);
      expect(path.length()).toEqual(4);

      path.append(5, 5, {altitude: 5});
      expect(path.length()).toEqual(5);

      expect(path.getPoint(0).position.latitude).toEqual(1);
      expect(path.getPoint(0).position.longitude).toEqual(1);
      expect(path.getPoint(1).position.latitude).toEqual(2);
      expect(path.getPoint(1).position.longitude).toEqual(2);
      expect(path.getPoint(2).position.latitude).toEqual(3);
      expect(path.getPoint(2).position.longitude).toEqual(3);
      expect(path.getPoint(3).position.latitude).toEqual(4);
      expect(path.getPoint(3).position.longitude).toEqual(4);
      expect(path.getPoint(3).altitude).toEqual(0);
      expect(path.getPoint(4).position.latitude).toEqual(5);
      expect(path.getPoint(4).position.longitude).toEqual(5);
      expect(path.getPoint(4).altitude).toEqual(5);
    });
    it('replacing/updating point', function() {
      var pointsArray = new Array(new Point(1,1),new Point(2,2),new Point(3,3));
      var path = new Path({points: pointsArray});

      expect(path.replacePoint).toBeDefined();

      path.replacePoint(1, new Point(5, 6, {altitude: 10}));

      expect(path.length()).toEqual(3);
      expect(path.getPoint(0).position.latitude).toEqual(1);
      expect(path.getPoint(0).position.longitude).toEqual(1);
      expect(path.getPoint(1).position.latitude).toEqual(5);
      expect(path.getPoint(1).position.longitude).toEqual(6);
      expect(path.getPoint(1).altitude).toEqual(10);
      expect(path.getPoint(2).position.latitude).toEqual(3);
      expect(path.getPoint(2).position.longitude).toEqual(3);
    });
    it('modifying point location', function() {
      var pointsArray = new Array(new Point(1,1),new Point(2,2),new Point(3,3));
      var path = new Path({points: pointsArray});

      expect(path.updatePointPos).toBeDefined();

      path.updatePointPos(1, 5, 6);

      expect(path.length()).toEqual(3);
      expect(path.getPoint(0).position.latitude).toEqual(1);
      expect(path.getPoint(0).position.longitude).toEqual(1);
      expect(path.getPoint(1).position.latitude).toEqual(5);
      expect(path.getPoint(1).position.longitude).toEqual(6);
      expect(path.getPoint(2).position.latitude).toEqual(3);
      expect(path.getPoint(2).position.longitude).toEqual(3);
    });
    it('reordering points', function() {
      var pointsArray = new Array(new Point(1,2),new Point(3,4),new Point(5,6));
      var path = new Path({points: pointsArray});

      expect(path.reverse).toBeDefined();
      expect(path.length()).toEqual(3);

      path.reverse();

      expect(path.length()).toEqual(3);
      expect(path.getPoint(0).position.latitude).toEqual(1);
      expect(path.getPoint(0).position.longitude).toEqual(2);
      expect(path.getPoint(1).position.latitude).toEqual(5);
      expect(path.getPoint(1).position.longitude).toEqual(6);
      expect(path.getPoint(2).position.latitude).toEqual(3);
      expect(path.getPoint(2).position.longitude).toEqual(4);
    });
    it('clearing the path', function() {
      var pointsArray = new Array(new Point(1,2),new Point(3,4),new Point(5,6));
      var path = new Path({points: pointsArray});

      expect(path.clear).toBeDefined();
      expect(path.length()).toEqual(3);

      path.clear();

      expect(path.length()).toEqual(0);
    });
  });
});
