const v1 = require('express').Router();

v1.use('/items', require('./items'));
v1.use('/professions', require('./professions'));
v1.use('/quests', require('./quests'));
v1.use('/skills', require('./skills'));

module.exports = v1;