/**
 * Dimensions of a 2d space
 */
export class Dimensions {
  /** width dimension */
  public readonly width: number;
  /** height dimension */
  public readonly height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}
