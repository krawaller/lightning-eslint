/**
 * @type {import('eslint').Rule.RuleModule} // JSDoc rulez :)
 */
module.exports = {
  meta: {
    docs: {
      description:
        "Force accessing services via hook instead of importing prod services",
    },
    messages: {
      access:
        "Naughty Bryce, don't import production services directly! Access them via useServices hook (in React) or extra params (thunks)",
    },
  },
  create: function (context) {
    return {};
  },
};
