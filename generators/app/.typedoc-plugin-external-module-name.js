const patterns = /(packages)\/([^/]+)\//;
module.exports = function customMappingFunction(explicit, implicit, path, reflection, context) {
  const matches = patterns.exec(path);
  return matches == null ? "root" : `${matches[1]}/${matches[2]}`;
};
