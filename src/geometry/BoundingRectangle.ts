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
      this.max.x - this.min.x,
      this.max.y - this.min.y
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
) {
  // Use approximate dimensions (via Math.floor) skewed upward so that
  // dimensions with even values will have the focal point at the lower
  // of the two center-most values
  const approxHalfWidth = Math.floor(dimensions.width * 0.5 + 0.5);
  const approxHalfHeight = Math.floor(dimensions.height * 0.5 + 0.5);
  return new BoundingRectangle(
    new Point(focalPoint.x - approxHalfWidth, focalPoint.y - approxHalfHeight),
    new Point(focalPoint.x + approxHalfWidth, focalPoint.y + approxHalfHeight)
  );
}
