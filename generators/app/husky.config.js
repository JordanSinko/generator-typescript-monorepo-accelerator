module.exports = {
  hooks: {
    "pre-commit": "run-s check-types format",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
  },
};
