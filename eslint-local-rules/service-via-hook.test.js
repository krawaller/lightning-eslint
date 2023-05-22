/*
Execute by running `node ./eslint-local-rules/service-via-hook.test.js`
NB: These tests are only valuable when TDD:ing the rule implementation.
They shouldn't be made part of the "regular" unit test suite.
*/

const RuleTester = require("eslint").RuleTester; // Test runner from eslint
const rule = require("./service-via-hook.rule"); // The local rule implementation we want to test
const { parserOptions } = require("../.eslintrc"); // Use same parser options as per eslint config

const ruleTester = new RuleTester({
  parserOptions,
});

const expectedError = {
  message: rule.meta.messages.access,
};

ruleTester.run("service-via-hook", rule, {
  valid: [],
  invalid: [],
});
