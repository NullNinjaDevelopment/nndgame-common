import { Point } from "..";

/**
 * Describes the max and min x- and y-coordinates of a 2d geometrical space.
 */
export class BoundingRectangle {
  /** Lower-bound x- and y-coordinates */
  public readonly min: Point;
  /** Upper-bound x- and y-coordinates */
  public readonly max: Point;

  constructor(min: Point, max: Point) {
    this.min = min;
    this.max = max;
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
