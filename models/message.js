const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "message.json"
);

const getMessageDataFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Message {
  constructor(t) {
    console.log("T BRay", t);
    this.name = t.name;
    this.message = t.message;
    this.date = t.date;
  }

  save() {
    getMessageDataFile((message) => {
      message.push(this);
      fs.writeFile(p, JSON.stringify(message), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getMessageDataFile(cb);
  }
};
