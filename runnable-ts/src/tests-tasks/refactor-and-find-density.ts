'use strict';

/**
 * Parse the CSV data into an array of objects.
 * @param {string} csv - The CSV data as a string.
 * @returns {Array<Object>} - Parsed data.
 */
function parseCSV(csv) {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',');
  return lines.slice(1).map(line => {
    const cells = line.split(',');
    return headers.reduce((obj, header, index) => {
      obj[header.trim()] = isNaN(cells[index])
        ? cells[index].trim()
        : parseFloat(cells[index]);
      return obj;
    }, {});
  });
}

/**
 * Calculate the density percentage for each city based on the maximum density.
 * @param {Array<Object>} data - Array of city data.
 * @param {string} densityKey - Key for density values in the data.
 * @returns {Array<Object>} - Data with an added `densityPercentage` field.
 */
function calculateDensityPercentage(data, densityKey = 'density') {
  const maxDensity = Math.max(...data.map(city => city[densityKey]));
  return data.map(city => ({
    ...city,
    densityPercentage: Math.round((city[densityKey] / maxDensity) * 100),
  }));
}

/**
 * Sort the data by a specified key in descending order.
 * @param {Array<Object>} data - Array of city data.
 * @param {string} key - Key to sort by.
 * @returns {Array<Object>} - Sorted data.
 */
function sortByKeyDescending(data, key) {
  return [...data].sort((a, b) => b[key] - a[key]);
}

/**
 * Format city data into a readable string.
 * @param {Object} city - City data.
 * @returns {string} - Formatted string.
 */
function formatCityData(city) {
  const fields = [
    city.city.padEnd(18),
    city.population.toString().padStart(10),
    city.area.toString().padStart(8),
    city.density.toString().padStart(8),
    city.country.padStart(18),
    city.densityPercentage.toString().padStart(6),
  ];
  return fields.join('');
}

/**
 * Print the formatted data to the console.
 * @param {Array<Object>} data - City data to print.
 */
function printFormattedData(data) {
  data.forEach(city => console.log(formatCityData(city)));
}


const rawData = `city,population,area,density,country
Shanghai,24256800,6340,3826,China
Delhi,16787941,1484,11313,India
Lagos,16060303,1171,13712,Nigeria
Istanbul,14160467,5461,2593,Turkey
Tokyo,13513734,2191,6168,Japan
Sao Paulo,12038175,1521,7914,Brazil
Mexico City,8874724,1486,5974,Mexico
London,8673713,1572,5431,United Kingdom
New York City,8537673,784,10892,United States
Bangkok,8280925,1569,5279,Thailand`;

const cities = parseCSV(rawData);
const citiesWithDensity = calculateDensityPercentage(cities);
const sortedCities = sortByKeyDescending(citiesWithDensity, 'densityPercentage');
printFormattedData(sortedCities);


(function runTests() {
  console.log('\nRunning Tests...');
  
  const testData = [
    { city: 'A', density: 100 },
    { city: 'B', density: 200 },
    { city: 'C', density: 50 },
  ];
  const expected = [
    { city: 'B', density: 200, densityPercentage: 100 },
    { city: 'A', density: 100, densityPercentage: 50 },
    { city: 'C', density: 50, densityPercentage: 25 },
  ];
  const result = calculateDensityPercentage(testData);
  const sortedResult = sortByKeyDescending(result, 'densityPercentage');

  console.assert(
    JSON.stringify(sortedResult) === JSON.stringify(expected),
    'Test failed for density calculation and sorting'
  );
  console.log('All tests passed!');
})();


// const data = `city,population,area,density,country
//   Shanghai,24256800,6340,3826,China
//   Delhi,16787941,1484,11313,India
//   Lagos,16060303,1171,13712,Nigeria
//   Istanbul,14160467,5461,2593,Turkey
//   Tokyo,13513734,2191,6168,Japan
//   Sao Paulo,12038175,1521,7914,Brazilgit
//   Mexico City,8874724,1486,5974,Mexico
//   London,8673713,1572,5431,United Kingdom
//   New York City,8537673,784,10892,United States
//   Bangkok,8280925,1569,5279,Thailand`;

// debugger;
// if (data) {
//   const lines = data.split('\n');
//   lines.pop();
//   const table = [];
//   let first = true;
//   let max = 0;
//   for (const line of lines) {
//     if (first) {
//       first = false;
//     } else {
//       const cells = line.split(',');
//       const d = parseInt(cells[3]);
//       if (d > max) max = d;
//       table.push([cells[0], cells[1], cells[2], cells[3], cells[4]]);
//     }
//   }
//   for (const row of table) {
//     const a = Math.round((row[3] * 100) / max);
//     row.push(a.toString());
//   }
//   table.sort((r1, r2) => r2[5] - r1[5]);
//   for (const row of table) {
//     let s = row[0].padEnd(18);
//     s += row[1].padStart(10);
//     s += row[2].padStart(8);
//     s += row[3].padStart(8);
//     s += row[4].padStart(18);
//     s += row[5].padStart(6);
//     console.log(s);
//   }
// }