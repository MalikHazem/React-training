import { movies, series } from "../../assets/data/data";
let totalData = movies.concat(series);
if (totalData.length > 0) {
  totalData.sort((one, two) =>
    one.rate > two.rate ? -1 : two.rate > one.rate ? 1 : 0
  );
  totalData = totalData.slice(0, 8);
}

export { totalData };
