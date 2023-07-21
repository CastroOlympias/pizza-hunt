const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pizza-hunt', {
//   useFindAndModify: false,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pizza-hunt', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // This add family: 4, enabled node js 18.12 to connect to the database, was receiving a 500 internal error.
        // MongooseServerSelectionError: connect ECONNREFUSED ::1:27017
        // fix found at https://stackoverflow.com/questions/69840504/mongooseserverselectionerror-connect-econnrefused-127017
        family: 4,
})
.then(db => console.log('DB is connected'))

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
