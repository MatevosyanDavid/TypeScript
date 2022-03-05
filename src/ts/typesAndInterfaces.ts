type stringOrNumber = number | string;
type Point = { x: number; y: stringOrNumber };

type D3Point = Point & {
  z: number;
};

interface IPoint {
  x: number;
  y: stringOrNumber;
}

interface IPoint {
  f: string;
}

interface I3dPoint extends IPoint {
  z: number;
}

const getPoint = (point: IPoint) => {
  const d: I3dPoint = point as I3dPoint;

  return d;
};

const canvas = document.getElementById('canvas') as HTMLCanvasElement;

const getCoords = (coords: I3dPoint): {} => {
  return coords;
};
