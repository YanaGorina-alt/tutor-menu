const mongoose = require('mongoose');
// Ensure the Subject model is processed by Mongoose, since in our tutorSchema we referencing Subject Schema
require('./Subject');

const tutorSchema = require('./tutorSchema');

module.exports = mongoose.model('Tutor', tutorSchema);