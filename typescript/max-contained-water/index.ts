import MaxContainedWater from "./MaxContainedWater";

const containers = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let area = new MaxContainedWater(containers);
const result = area.largestContainer();
console.log(
  "From the given Array of ",
  containers,
  area.coordinate,
  " will create a bucket with volume of",
  result,
  " that has most water."
);
