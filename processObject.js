const fsModule = require("fs");


const fileName = process.argv[2];
const fileData = process.argv[3];

fsModule.writeFileSync(fileName, fileData);
