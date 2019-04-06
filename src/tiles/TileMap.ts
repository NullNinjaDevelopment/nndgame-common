import { isNullOrUndefined, isUndefined } from "util";
import { InvalidArgumentError } from "../error/InvalidArgumentError";
import { BoundingRectangle } from "../geometry/BoundingRectangle";
import { Point, PointHash } from "../geometry/Point";
import { TileMapInitializedEmptyError } from "./TileMapInitializedEmptyError";

/**
 * Immutable container for Point-referenced Tiles.
 */
export class TileMap<Tile> {
  /** Internal storage of Point-referenced Tiles */
  private tileMap: Map<PointHash, Tile>;
  /** Contains the max/min values for x and y coordinates contained in tile map */
  private boundingRectangle: BoundingRectangle | undefined;

  constructor(tiles: Map<Point, Tile>) {
    if (isNullOrUndefined(tiles) || tiles.size === 0) {
      throw new TileMapInitializedEmptyError();
    }

    this.tileMap = new Map();
    tiles.forEach((tile: Tile, point: Point) => {
      this.tileMap.set(point.hash(), tile);
      this.boundingRectangle = isUndefined(this.boundingRectangle)
        ? new BoundingRectangle(point, point)
        : this.boundingRectangle.recalibrate(point);
    });
  }

  /**
   * Checks if the specified Point is registered in the tile map.
   * @param point
   */
  public has(point: Point): boolean {
    if (isNullOrUndefined(point)) {
      throw new InvalidArgumentError("point must be defined and non-null");
    }
    return this.tileMap.has(point.hash());
  }

  /**
   * Returns the Tile registered to the specified Point, or undefined.
   * @param point
   */
  public get(point: Point): Tile | undefined {
    if (isNullOrUndefined(point)) {
      throw new InvalidArgumentError("point must be defined and non-null");
    }
    return this.tileMap.get(point.hash());
  }

  /**
   * Returns the number of Tiles registered in the tile map.
   */
  public get size(): number {
    return this.tileMap.size;
  }

  /**
   * Returns the bounding rectangle with the max/min x- and y-coordinates contained in the tile map, or undefined if no Tiles are present.
   */
  public getBoundingRect(): BoundingRectangle {
    return this.boundingRectangle as BoundingRectangle;
  }
}
