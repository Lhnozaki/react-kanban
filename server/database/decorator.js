const User = require("./models/User");
const Priority = require("./models/Priority");
const Status = require("./models/Status");
const Card = require("./models/Card");

module.exports = function(req, res, next) {
  req.db = { User: User, Priority: Priority, Status: Status, Card: Card };
  next();
};
