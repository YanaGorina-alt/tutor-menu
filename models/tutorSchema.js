const Schema = require('mongoose').Schema;

const tutorSchema = new Schema({
  name: { type: String, required: true },
  education:{ type: String },
  photo: String,
  subject: { type: Schema.Types.ObjectId, ref: 'Subject' },
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = tutorSchema;