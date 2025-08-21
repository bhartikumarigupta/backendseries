const lodash = require('lodash');
const names = ['Bharti', 'Gupta', 'Soniya', 'Rani'];
const captalizedNames = lodash.map(names, lodash.upperCase);
console.log(captalizedNames);
