import { Point } from "../geometry/Point";
import { TileMap } from "./TileMap";
import { TileMapInitializedEmptyError } from "./TileMapInitializedEmptyError";

describe("TileMap", () => {
  it("throws error on empty constructor", () => {
    try {
      const _ = new TileMap<any>(new Map());
    } catch (error) {
      expect(error instanceof TileMapInitializedEmptyError).toStrictEqual(true);
      return;
    }
    fail();
  });

  describe("size property", () => {
    it("includes all unique points", () => {
      const tiles = new Map<Point, number>();
      tiles.set(new Point(1, 2), 20);
      tiles.set(new Point(2, 2), 22);
      tiles.set(new Point(4, 1), 20);
      const tileMap = new TileMap(tiles);

      expect(tileMap.size).toStrictEqual(3);
    });

    it("dedupes existing points", () => {
      const tiles = new Map<Point, number>();
      tiles.set(new Point(1, 2), 20);
      tiles.set(new Point(1, 2), 20);
      const tileMap = new TileMap(tiles);

      expect(tileMap.size).toStrictEqual(1);
    });
  });

  describe("get method", () => {
    it("dedupes points and returns the last-supplied Tile", () => {
      const tiles = new Map<Point, number>();
      tiles.set(new Point(1, 2), 45);
      tiles.set(new Point(1, 2), 50);
      const tileMap = new TileMap(tiles);

      expect(tileMap.get(new Point(1, 2))).toStrictEqual(50);
    });
  });

  describe("bounding rectangle", () => {
    it("equals the only point in the tile map when size is 1", () => {
      const tiles = new Map<Point, number>();
      const x = 50;
      const y = 45;
      tiles.set(new Point(x, y), 888);
      const tileMap = new TileMap(tiles);
      const boundingRect = tileMap.getBoundingRect();
      expect(boundingRect.min.x).toStrictEqual(x);
      expect(boundingRect.max.x).toStrictEqual(x);
      expect(boundingRect.min.y).toStrictEqual(y);
      expect(boundingRect.max.y).toStrictEqual(y);
    });
  });

  it("contains the same number of items as the Map from the constructor", () => {
    const tiles = new Map<Point, number>();
    tiles.set(new Point(1, 2), 15);
    tiles.set(new Point(2, 3), 20);
    const tileMap = new TileMap<number>(tiles);

    expect(tileMap.size).toStrictEqual(tiles.size);
  });
});
