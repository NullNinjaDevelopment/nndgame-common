import { calculateBoundingRectangle } from "./BoundingRectangle";
import { Dimensions } from "./Dimensions";
import { Point } from "./Point";

describe("BoundingRectangle", () => {
  describe("calculateBoundingRectangle", () => {
    it("should calculate correct 1x1 width", () => {
      const point = new Point(0, 0);
      const dimensions = new Dimensions(1, 1);

      const boundingRectangle = calculateBoundingRectangle(point, dimensions);

      expect(boundingRectangle.dimensions.width).toBe(1);
    });

    it("should calculate correct 1x1 height", () => {
      const point = new Point(0, 0);
      const dimensions = new Dimensions(1, 1);

      const boundingRectangle = calculateBoundingRectangle(point, dimensions);

      expect(boundingRectangle.dimensions.height).toBe(1);
    });

    it("should calculate correct 1x1 min x point", () => {
      const point = new Point(0, 0);
      const dimensions = new Dimensions(1, 1);

      const boundingRectangle = calculateBoundingRectangle(point, dimensions);
      expect(boundingRectangle.min.x).toBe(0);
    });

    it("should calculate correct 1x1 max x point", () => {
      const point = new Point(0, 0);
      const dimensions = new Dimensions(1, 1);

      const boundingRectangle = calculateBoundingRectangle(point, dimensions);
      expect(boundingRectangle.max.x).toBe(0);
    });

    it("should calculate correct 1x1 min y point", () => {
      const point = new Point(0, 0);
      const dimensions = new Dimensions(1, 1);

      const boundingRectangle = calculateBoundingRectangle(point, dimensions);
      expect(boundingRectangle.min.y).toBe(0);
    });

    it("should calculate correct 1x1 max y point", () => {
      const point = new Point(0, 0);
      const dimensions = new Dimensions(1, 1);

      const boundingRectangle = calculateBoundingRectangle(point, dimensions);
      expect(boundingRectangle.max.y).toBe(0);
    });

    it("should calculate correct 2x2 width", () => {
      const point = new Point(0, 0);
      const dimensions = new Dimensions(2, 2);

      const boundingRectangle = calculateBoundingRectangle(point, dimensions);

      expect(boundingRectangle.dimensions.width).toBe(2);
    });

    it("should calculate correct 2x2 height", () => {
      const point = new Point(0, 0);
      const dimensions = new Dimensions(2, 2);

      const boundingRectangle = calculateBoundingRectangle(point, dimensions);

      expect(boundingRectangle.dimensions.height).toBe(2);
    });

    it("should calculate correct 2x2 min x point", () => {
      const point = new Point(0, 0);
      const dimensions = new Dimensions(2, 2);

      const boundingRectangle = calculateBoundingRectangle(point, dimensions);
      expect(boundingRectangle.min.x).toBe(0);
    });

    it("should calculate correct 2x2 max x point", () => {
      const point = new Point(0, 0);
      const dimensions = new Dimensions(2, 2);

      const boundingRectangle = calculateBoundingRectangle(point, dimensions);
      expect(boundingRectangle.max.x).toBe(1);
    });

    it("should calculate correct 2x2 min y point", () => {
      const point = new Point(0, 0);
      const dimensions = new Dimensions(2, 2);

      const boundingRectangle = calculateBoundingRectangle(point, dimensions);
      expect(boundingRectangle.min.y).toBe(0);
    });

    it("should calculate correct 2x2 max y point", () => {
      const point = new Point(0, 0);
      const dimensions = new Dimensions(2, 2);

      const boundingRectangle = calculateBoundingRectangle(point, dimensions);
      expect(boundingRectangle.max.y).toBe(1);
    });

    it("should calculate correct 5x5 bounding rectangle", () => {
      const point = new Point(0, 0);
      const dimensions = new Dimensions(5, 5);

      const boundingRectangle = calculateBoundingRectangle(point, dimensions);
      expect(boundingRectangle.dimensions.width).toBe(5);
      expect(boundingRectangle.dimensions.height).toBe(5);
      expect(boundingRectangle.min.x).toBe(-2);
      expect(boundingRectangle.min.y).toBe(-2);
      expect(boundingRectangle.max.x).toBe(2);
      expect(boundingRectangle.max.y).toBe(2);
    });

    it("should calculate correct 6x6 bounding rectangle", () => {
      const point = new Point(0, 0);
      const dimensions = new Dimensions(6, 6);

      const boundingRectangle = calculateBoundingRectangle(point, dimensions);
      expect(boundingRectangle.dimensions.width).toBe(6);
      expect(boundingRectangle.dimensions.height).toBe(6);
      expect(boundingRectangle.min.x).toBe(-2);
      expect(boundingRectangle.min.y).toBe(-2);
      expect(boundingRectangle.max.x).toBe(3);
      expect(boundingRectangle.max.y).toBe(3);
    });
  });
});
