import { Dimensions } from "./Dimensions";
import { Point } from "./Point";

/**
 * Describes the max and min x- and y-coordinates of a 2d geometrical space.
 */
export class BoundingRectangle {
  /** Lower-bound x- and y-coordinates */
  public readonly min: Point;
  /** Upper-bound x- and y-coordinates */
  public readonly max: Point;
  /** Dimensions of the bounding rectangle */
  public readonly dimensions: Dimensions;

  constructor(min: Point, max: Point) {
    this.min = min;
    this.max = max;
    this.dimensions = new Dimensions(
      this.max.x - this.min.x + 1,
      this.max.y - this.min.y + 1
    );
  }

  /**
   * Returns a new bounding box given an additional point to consider.
   * @param point
   */
  public recalibrate(point: Point): BoundingRectangle {
    const min = new Point(
      Math.min(point.x, this.min.x),
      Math.min(point.y, this.min.y)
    );
    const max = new Point(
      Math.max(point.x, this.max.x),
      Math.max(point.y, this.max.y)
    );
    return new BoundingRectangle(min, max);
  }
}

/**
 * Calculates the bounding rectangle around a given focal point with the specified dimensions.
 * @param focalPoint center point of the bounding rectangle
 * @param dimensions dimensions of the bounding rectangle
 */
export function calculateBoundingRectangle(
  focalPoint: Point,
  dimensions: Dimensions
): BoundingRectangle {
  const minX =
    focalPoint.x -
    Math.floor(dimensions.width * 0.5) +
    (isEven(dimensions.width) ? 1 : 0); // skew min upward by 1 on even widths
  const minY =
    focalPoint.y -
    Math.floor(dimensions.height * 0.5) +
    (isEven(dimensions.height) ? 1 : 0); // skew min upward by 1 on even heights
  const maxX = focalPoint.x + Math.floor(dimensions.width * 0.5);
  const maxY = focalPoint.y + Math.floor(dimensions.height * 0.5);
  return new BoundingRectangle(new Point(minX, minY), new Point(maxX, maxY));
}

/**
 * Check the parity of a number to see if it is even
 * @param num the number to check for parity
 */
function isEven(num: number): boolean {
  return num % 2 === 0;
}
