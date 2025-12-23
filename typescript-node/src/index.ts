import fs from "node:fs";

const readStream = fs.createReadStream("package.json");

const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);
