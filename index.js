function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function compileType(name, definitions) {
  return `export interface ${name} {\n${definitions}}; \n`;
}

function generateTypeDefinitions(typeName, json) {
  let typeDefinitions = "";
  let nestedTypes = [];

  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      const value = json[key];
      if (typeof value === "string") {
        typeDefinitions += `  ${key}: string;\n`;
      } else if (typeof value === "number") {
        typeDefinitions += `  ${key}: number;\n`;
      } else if (typeof value === "boolean") {
        typeDefinitions += `  ${key}: boolean;\n`;
      } else if (Array.isArray(value)) {
        const arrayType = value.length > 0 ? typeof value[0] : "any";
        typeDefinitions += `  ${key}: ${arrayType}[];\n`;
      } else if (typeof value === "object" && value !== null) {
        const nestedTypeName = capitalize(key);
        const nestedTypeDefinitions = generateTypeDefinitions(nestedTypeName, value);
        nestedTypes.push(nestedTypeDefinitions);
        typeDefinitions += `  ${key}: ${typeName}.${nestedTypeName};\n`;
      }
    }
  }

  const compiledType = compileType(typeName, typeDefinitions);

  let namespaceBody = "";

  for (type of nestedTypes) {
    namespaceBody += type;
  }

  const typeNamespace = nestedTypes.length ? `export namespace ${typeName} {\n${namespaceBody}}; \n` : "";

  return compiledType + typeNamespace;
}

const json = {
  brand: "BMW",
  engine: {
    size: "V6",
  },
};

const typeDefinitions = generateTypeDefinitions("Car", json);

console.log(typeDefinitions);
