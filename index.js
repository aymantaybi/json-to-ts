const path = require("path");
const fs = require("fs");
const { generateTypeDefinitions } = require("./helpers");

const directoryPath = path.join(__dirname, "inputs");

const files = fs.readdirSync(directoryPath);

let streamInterface = "";
let exportStatements = "";

files.forEach((file) => {
  const input = fs.readFileSync(`./inputs/${file}`, "utf-8");
  const json = JSON.parse(input);
  const typeDefinitions = generateTypeDefinitions(json._messageType, json);
  fs.writeFileSync(`./outputs/${json._messageType}.ts`, typeDefinitions);
  console.log(typeDefinitions);
  streamInterface += `on(event: "${json._messageType}", listener: (data: ${json._messageType}) => void): this; \n`;
  exportStatements += `export * from "./${json._messageType}"; \n`;
});

console.log(streamInterface);
console.log("\n");
console.log(exportStatements);
