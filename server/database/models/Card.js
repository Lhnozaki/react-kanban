const bookshelf = require("../bookshelf");

class Card extends bookshelf.Model {
  get tableName() {
    return "cards";
  }

  get hasTimestamps() {
    return true;
  }

  created_by() {
    return this.belongsTo("User", "created_by");
  }

  assigned_to() {
    return this.belongsTo("User", "assigned_to");
  }

  priorities() {
    return this.belongsTo("Priority");
  }

  statuses() {
    return this.belongsTo("Status");
  }
}

module.exports = bookshelf.Model("Card", Card);
