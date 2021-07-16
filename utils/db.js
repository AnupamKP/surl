const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
  });

function insert(doc) {
  const urlDoc = new Url(doc);
  urlDoc.save().then(
    (savedDoc) => {
      console.log(`Saved with id: ${savedDoc.id}`);
    },
    (err) => {
      console.log(`Error in saving blog ${err}`);
    }
  );
}

function select(id) {
  Url.findById(id).then(
    (url) => {
      console.log(url.shortUrl);
    },
    (err) => {
      console.log(`Error in finding url ${err}`);
    }
  );
}

module.exports = (insert, select);
