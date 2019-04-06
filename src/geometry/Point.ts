export type PointHash = string;

/**
 * Reference to a point in 2-dimensional space.
 */
export class Point {
  /** x-coordinate */
  public readonly x: number;
  /** y-coordinate */
  public readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Generates a unique hash for this object.
   */
  public hash(): PointHash {
    return `${this.x}_${this.y}`;
  }
}
