const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tutorSchema = require('./tutorSchema');

const lineTutorSchema = new Schema({
  qty: { type: Number, default: 1 },
  tutor: tutorSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineTutorSchema.virtual('extPrice').get(function() {
  // 'this' is bound to the lineTutor subdoc
  return this.qty * this.tutor.price;
});

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' }, // each order has a User to whom it belongs to
  lineTutors: [lineTutorSchema], // embedding
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  return this.lineTutors.reduce((total, tutor) => total + tutor.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function() {
  return this.lineTutors.reduce((total, tutor) => total + tutor.qty, 0);
});

orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
  // 'this' is the Order model
  return this.findOneAndUpdate(
    // query
    { user: userId, isPaid: false },
    // update
    { user: userId },
    // upsert option will create the doc if
    // it doesn't exist
    { upsert: true, new: true }
  );
};

orderSchema.methods.addTutorToCart = async function(tutorId) {
  const cart = this;
  // Check if tutor is already in cart
  const lineTutor = cart.lineTutors.find(lineTutor => lineTutor.tutor._id.equals(tutorId));
  if (lineTutor) {
    lineTutor.qty += 1;
  } else {
    const tutor = await mongoose.model('Tutor').findById(tutorId);
    cart.lineTutors.push({ tutor });
  }
  return cart.save();
};

// Instance method to set an tutors's hoursQty in the cart (will add tutor if does not exist)
orderSchema.methods.setTutorHoursQty = function(tutorId, newHoursQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the lineTutor in the cart for the menu tutor
  const lineTutor = cart.lineTutors.find(lineTutor => lineTutor.tutor._id.equals(tutorId));
  if (lineTutor && newHoursQty <= 0) {
    // Calling deleteOne, deletes itself from the cart.lineTutors array
    lineTutor.deleteOne();
  } else if (lineTutor) {
    // Set the new hoursQty - positive value is assured thanks to prev if
    lineTutor.qty = newHoursQty;
  }
  // return the save() method's promise
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);