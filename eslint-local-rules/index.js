const serviceViaHook = require("./service-via-hook.rule");

// Everything exported from here will be available as rules
// with the name `local-rules/<PROPERTY_NAME>`
module.exports = {
  "service-via-hook": serviceViaHook,
};
