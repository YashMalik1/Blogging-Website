const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const url =
  "mongodb+srv://priyansupp:pkj01072003@cluster0.ir1vrth.mongodb.net/blogging-website";
// Connect MongoDB at default port 27017.
let mong = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
