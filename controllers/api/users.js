const User = require("../../models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  create,
  login,
};

// This function fires when a POST request is made to /api/users
async function create(req, res) {
  try {
    // Add the user to the database
    //console.log("I am about to create an user")
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token);

  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    // query our database to find a user with the email provided
    const user = await User.findOne({email: req.body.email});
    if(!user) throw new Error();
    // if we found a user with the email => compare passwords
    // 1st argument from the credentials that the login user typed in
    // 2nd argument what's stored in the database
    const match = await bcrypt.compare(req.body.password, user.password);
    if(!match) throw new Error();
    res.json(createJWT(user));
  } catch (error) {
      res.status(400).json('Bad Credentials');
  }
}

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}