
const csvToJson = require('convert-csv-to-json');

const worstSongs = csvToJson.getJsonFromCsv('100worst.csv');
// console.log(worstSongs[1].year);

function countSong(param) {
  let count = 0;
  let countMax = 1;
  let songYear = [];
  for (let i = 0; i < param.length; i++) {
    for (let j = 0; j < param.length; j++) {
      if (param[i].year === param[j].year) {
        count += 1;
      }
      if (count === countMax) {
        if (!songYear.includes(param[i].year)) {
          songYear += ` & ${param[i].year}`;
        }
      }
      if (count > countMax) {
        countMax = count;
        songYear = param[i].year;
      }
    }
    count = 0;
  }
  return `The year when the most worst songs came out is ${songYear}`;
}

console.log(countSong(worstSongs));

// expected output
// `The year when the most worst songs came out is <year>.`
