module.exports = {
  extends: 'airbnb',
  env: {
    'browser': true,
  },
  rules: {
    'no-console': 0,
    'no-plusplus': [2, { 'allowForLoopAfterthoughts': true }],
  },
};
