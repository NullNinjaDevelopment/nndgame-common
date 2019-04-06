import { Point } from "./Point";

describe("Point", () => {
  it("should set the 'x' property from the constructor", () => {
    const point: Point = new Point(0, 1);
    expect(point.x).toStrictEqual(0);
  });

  it("should set the 'y' property from the constructor", () => {
    const point: Point = new Point(0, 1);
    expect(point.y).toStrictEqual(1);
  });
});
