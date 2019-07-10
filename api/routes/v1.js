const v1 = require('express').Router();

v1.use('/items', require('./items'));
v1.use('/profession', require('./profession'));
v1.use('/quest', require('./quest'));
v1.use('/skill', require('./skill'));

v1.use('/search', require('./search'));

module.exports = v1;