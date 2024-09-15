module.exports = {
  format:['html:cucumber-report.html'],
  parallel: 1,
  default: "--require-module ts-node/register --require ./src/step-definitions/**/*.ts --require ./src/hooks/**/*.ts --format progress"
};
