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
        // Can access context.report.data[PROP] as {{ PROP }}
        "Naughty Bryce, don't import production services directly! Access them via useServices hook (in React) or extra params (thunks)",
    },
  },
  create: function (context) {
    return {
      ImportDeclaration: (node) => {
        const illegalAccess = node?.source?.value?.endsWith?.("/prod-services");
        if (illegalAccess) {
          context.report({
            node,
            messageId: "access",
            data: {}, // Props in here are accessable in message
          });
        }
      },

      // // Equivalent version using more advanced selectors

      // "ImportDeclaration[source.value=/prod-services$/]": (node) => {
      //   context.report({
      //     node,
      //     messageId: "access",
      //     data: {}, // Props in here are accessable in message
      //   });
      // },
    };
  },
};
