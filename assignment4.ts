// Solution 4
interface Circle {
  shape: "circle";
  radius: number;
}

interface Rectangle {
  shape: "rectangle";
  height: number;
  width: number;
}
const calculateShapeArea = (polygon: Circle | Rectangle): number => {
  let area = 0;
  if (polygon.shape == "circle") {
    area = Number((Math.PI * polygon.radius * polygon.radius).toFixed(2));
    return area;
  } else if (polygon.shape == "rectangle") {
    area = Number((polygon.height * polygon.width).toFixed(2));
    return area;
  }
  return area;
};
